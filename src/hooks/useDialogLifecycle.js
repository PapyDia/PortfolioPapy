import { useEffect } from "react";

const focusableSelector = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(", ");

let scrollLockCount = 0;
let scrollRestoreState = null;

function restoreWindowScroll(scrollY) {
  const documentElement = document.documentElement;
  const previousHtmlScrollBehavior = documentElement.style.scrollBehavior;
  const previousBodyScrollBehavior = document.body.style.scrollBehavior;

  documentElement.style.scrollBehavior = "auto";
  document.body.style.scrollBehavior = "auto";
  window.scrollTo({
    behavior: "auto",
    left: 0,
    top: scrollY,
  });

  window.requestAnimationFrame(() => {
    documentElement.style.scrollBehavior = previousHtmlScrollBehavior;
    document.body.style.scrollBehavior = previousBodyScrollBehavior;
  });
}

function focusWithoutScroll(element) {
  if (!element) {
    return;
  }

  try {
    element.focus({ preventScroll: true });
  } catch {
    element.focus();
  }
}

function lockBodyScroll() {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return;
  }

  scrollLockCount += 1;

  if (scrollLockCount > 1) {
    return;
  }

  const scrollY = window.scrollY;
  const scrollbarWidth =
    window.innerWidth - document.documentElement.clientWidth;

  scrollRestoreState = {
    left: document.body.style.left,
    overflow: document.body.style.overflow,
    paddingRight: document.body.style.paddingRight,
    position: document.body.style.position,
    right: document.body.style.right,
    scrollY,
    top: document.body.style.top,
    width: document.body.style.width,
  };

  document.body.style.position = "fixed";
  document.body.style.top = `-${scrollY}px`;
  document.body.style.left = "0";
  document.body.style.right = "0";
  document.body.style.width = "100%";
  document.body.style.overflow = "hidden";

  if (scrollbarWidth > 0) {
    document.body.style.paddingRight = `${scrollbarWidth}px`;
  }
}

function unlockBodyScroll() {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return;
  }

  scrollLockCount = Math.max(0, scrollLockCount - 1);

  if (scrollLockCount > 0 || !scrollRestoreState) {
    return;
  }

  const { left, overflow, paddingRight, position, right, scrollY, top, width } =
    scrollRestoreState;

  document.body.style.position = position;
  document.body.style.top = top;
  document.body.style.left = left;
  document.body.style.right = right;
  document.body.style.width = width;
  document.body.style.overflow = overflow;
  document.body.style.paddingRight = paddingRight;

  scrollRestoreState = null;
  restoreWindowScroll(scrollY);
}

function useDialogLifecycle(
  isOpen,
  onClose,
  initialFocusRef,
  dialogRef,
  restoreFocusRef,
) {
  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previouslyFocusedElement = document.activeElement;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) {
        return;
      }

      const focusableElements = Array.from(
        dialogRef.current.querySelectorAll(focusableSelector),
      );

      if (focusableElements.length === 0) {
        event.preventDefault();
        focusWithoutScroll(dialogRef.current);
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      const activeElement = document.activeElement;

      if (!dialogRef.current.contains(activeElement)) {
        event.preventDefault();
        const nextElement = event.shiftKey ? lastElement : firstElement;
        focusWithoutScroll(nextElement);
      } else if (event.shiftKey && activeElement === firstElement) {
        event.preventDefault();
        focusWithoutScroll(lastElement);
      } else if (!event.shiftKey && activeElement === lastElement) {
        event.preventDefault();
        focusWithoutScroll(firstElement);
      }
    }

    lockBodyScroll();
    document.addEventListener("keydown", handleKeyDown);
    focusWithoutScroll(initialFocusRef.current);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      unlockBodyScroll();

      if (
        restoreFocusRef?.current !== false &&
        previouslyFocusedElement instanceof HTMLElement
      ) {
        focusWithoutScroll(previouslyFocusedElement);
      }

      if (restoreFocusRef) {
        restoreFocusRef.current = true;
      }
    };
  }, [dialogRef, initialFocusRef, isOpen, onClose, restoreFocusRef]);
}

export default useDialogLifecycle;

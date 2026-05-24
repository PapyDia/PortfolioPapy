import { useEffect } from 'react'

const focusableSelector = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(', ')

function useDialogLifecycle(
  isOpen,
  onClose,
  initialFocusRef,
  dialogRef,
  restoreFocusRef,
) {
  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    const previouslyFocusedElement = document.activeElement
    const previousOverflow = document.body.style.overflow

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        onClose()
        return
      }

      if (event.key !== 'Tab' || !dialogRef.current) {
        return
      }

      const focusableElements = Array.from(
        dialogRef.current.querySelectorAll(focusableSelector),
      )

      if (focusableElements.length === 0) {
        event.preventDefault()
        dialogRef.current.focus()
        return
      }

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]
      const activeElement = document.activeElement

      if (!dialogRef.current.contains(activeElement)) {
        event.preventDefault()
        const nextElement = event.shiftKey ? lastElement : firstElement
        nextElement.focus()
      } else if (event.shiftKey && activeElement === firstElement) {
        event.preventDefault()
        lastElement.focus()
      } else if (!event.shiftKey && activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)
    initialFocusRef.current?.focus()

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow

      if (
        restoreFocusRef?.current !== false &&
        previouslyFocusedElement instanceof HTMLElement
      ) {
        previouslyFocusedElement.focus()
      }

      if (restoreFocusRef) {
        restoreFocusRef.current = true
      }
    }
  }, [dialogRef, initialFocusRef, isOpen, onClose, restoreFocusRef])
}

export default useDialogLifecycle

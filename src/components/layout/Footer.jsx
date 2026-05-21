import { portfolioData } from '../../data/portfolioData'
import Container from '../ui/Container'

function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <Container>
        <p className="text-center text-sm text-text-soft">
          {portfolioData.footer}
        </p>
      </Container>
    </footer>
  )
}

export default Footer

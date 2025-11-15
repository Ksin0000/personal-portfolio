import P5Background from '@/components/P5Background'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function Background() {
  const navigate = useNavigate()

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1)
      return
    }
    navigate('/', { replace: true })
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <P5Background />
      <button
        type="button"
        aria-label="前のページに戻る"
        className="absolute left-6 top-6 inline-flex h-12 w-12 items-center justify-center text-black/60 transition hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
        onClick={handleBack}
      >
        <ArrowLeft className="h-10 w-10" strokeWidth={1} />
      </button>
    </div>
  )
}

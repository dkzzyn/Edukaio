import './Logo.css'

function Logo({ size = 'medium' }) {
  const sizes = {
    small: { height: '85px' },
    medium: { height: '115px' },
    large: { height: '130px' },
    xlarge: { height: '180px' }
  }

  const currentSize = sizes[size] || sizes.medium

  return (
    <div className={`logo logo--${size}`}>
      <img 
        src="/logo-edukaio.png" 
        alt="Instituto Edukaio" 
        style={{ height: currentSize.height, width: 'auto' }}
        className="logo__image"
      />
    </div>
  )
}

export default Logo

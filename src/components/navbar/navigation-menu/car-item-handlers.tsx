const handleMenuRemoveOnClick = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => {
  // IF MOBILE EXIT AS ON MOBILE CLICK BRINGS UP THE MENU INSTEAD OF HOVER
  if (isTouchScreen()) return

  const target = e.target as Element
  document.getElementById('navigation-menu')?.remove()

  const menuWrapper = target.closest('div')
  if (menuWrapper) {
    menuWrapper.style.pointerEvents = 'none'
    setTimeout(() => {
      menuWrapper.style.pointerEvents = 'all'
    }, 750)
  }
}

const handleLinkClickMenuClose = () => {
  const doneButton = document.getElementById('side-menu-done-button')
  if (doneButton) doneButton.click()
}

const isTouchScreen = () => {
  if (window.matchMedia('(pointer: coarse)').matches) return true
  return false
}

export { handleMenuRemoveOnClick, handleLinkClickMenuClose, isTouchScreen }

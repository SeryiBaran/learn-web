import Fuse from 'fuse.js'
import type { UserGeneratorResponse } from './types/userGeneratorResponse'
import 'iconify-icon'
import 'gardevoir'
import './css/style.pcss'

function assert(condition: any, msg?: string): asserts condition {
  if (!condition) throw new Error(msg)
}

;(() => {
  const hideButton = document.querySelector<HTMLButtonElement>('#hideAll')
  const wrapperForHiding =
    document.querySelector<HTMLDivElement>('#wrapperForHiding')

  const hidedFromLocalstorage = JSON.parse(
    localStorage.getItem('allIsHided') || 'false'
  )
  let hided = hidedFromLocalstorage

  function renderButtonText() {
    assert(hideButton !== null)
    hideButton.innerText = hided ? 'Показать все' : 'Скрыть все'
  }

  function syncWithLS() {
    localStorage.setItem('allIsHided', String(hided))
  }

  function syncWithWrapper() {
    assert(wrapperForHiding !== null)

    if (hided) wrapperForHiding.classList.add('hidden')
    else wrapperForHiding.classList.remove('hidden')
  }

  function toggleAllHide() {
    assert(wrapperForHiding !== null)
    hided = !hided
    syncWithLS()
    syncWithWrapper()
    renderButtonText()
  }

  assert(hideButton !== null)
  hideButton.addEventListener('click', () => {
    toggleAllHide()
  })

  syncWithWrapper()
  renderButtonText()
})()

// TODO: Сделай функцию которая будет загружать список данных с какого нибудь апи, и выведи их как карточки. Потом добавь сортировки по полям с объекта, а потом поиск
;(async () => {
  const cardsContainer = document.querySelector<HTMLDivElement>(
    '#usersCardsContainer'
  )
  const searchInput =
    document.querySelector<HTMLInputElement>('#usersSearchInput')

  const userGeneratorResponse: UserGeneratorResponse = await fetch(
    'https://randomuser.me/api?results=30'
  ).then((res) => res.json())
  const users = userGeneratorResponse.results

  const fuse = new Fuse(users, {
    keys: ['name.title', 'name.first', 'name.last'],
    threshold: 0.4,
  })

  function renderUsersCards(users) {
    const cardsHTML = users
      .map((user) => {
        const contactsData = [
          { icon: 'ri:user-fill', value: `@${user.login.username}` },
          { icon: 'ri:mail-fill', value: user.email },
          { icon: 'ri:phone-fill', value: user.phone },
          {
            icon: 'ri:home-fill',
            value: `${user.location.country}, ${user.location.city}, ${user.location.street.name}, ${user.location.street.number}`,
          },
        ]

        const contactsHTML = contactsData
          .map((item) => {
            return `
  <li><iconify-icon icon="${item.icon}" class="icon"></iconify-icon>: ${item.value}</li>
        `
          })
          .join('')

        return `
  <div class="userCard">
    <img
      src="${user.picture.large}"
      alt="User Avatar"
      class="userAvatar"
    />
    <p class="userName">
    <iconify-icon icon="flag:${user.nat.toLowerCase()}-4x3" class="icon"></iconify-icon>${
          user.name.title
        }. ${user.name.first} ${user.name.last}
    </p>
    <ul class="userContacts">
      ${contactsHTML}
    </ul>
  </div>
      `
      })
      .join('')

    assert(cardsContainer !== null)
    cardsContainer.innerHTML = cardsHTML
  }

  assert(searchInput !== null)
  searchInput.addEventListener('input', (evt) => {
    const target = evt.target as HTMLInputElement // работает
    // const target = evt.target; // не работает

    const searchResults = fuse.search(target.value)
    console.log(target.value.length <= 0)
    console.log(searchResults)
    if (target.value.length <= 0) {
      renderUsersCards(users)
      return
    }
    renderUsersCards(searchResults.map((item) => item.item))
  })

  renderUsersCards(users)
})()

console.log(
  '%c' + 'Error',
  `padding: 4px 8px;
      color: white;
      background-color: red`
)

console.log(
  '%c' + 'Warning',
  `padding: 4px 8px;
      color: white;
      background-color: orange`
)

console.log(
  '%c' + 'Success',
  `padding: 4px 8px;
      color: white;
      background-color: green`
)

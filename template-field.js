// Packages
import { RecordContextProvider } from 'react-admin'
import { mount } from '@cypress/react'

// Components
import {{nome_do_componente}} from 'libs/stone-account/stone-admin-operations/src/fields/{{nome_do_arquivo}}'

describe('{{nome_do_componente}} component', () => {
  it('', () => {

    mount(
      <RecordContextProvider value={}>
        <{{nome_do_componente}} label="" source="" />
      </RecordContextProvider>,
    )

    cy.contains('').should('be.visible')
  })

  it('', () => {
    
    mount(
      <RecordContextProvider value={}>
        <{{nome_do_componente}} label="" source="" />
      </RecordContextProvider>,
    )
    
    cy.contains('').should('not.be.visible')
  })
})
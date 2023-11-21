// Packages
import { RecordContextProvider } from 'react-admin'
import { mount } from '@cypress/react'
import { ComponentProps, ReactElement } from 'react'
import { ThemeProvider } from '@mui/material'

// Utils
import { createTheme } from '@core/stone-admin-operations-utils'

// Components
import {{nome_do_componente}} from 'libs/stone-account/stone-admin-operations-components/src/fields/status-chip-fields/{{nome_do_arquivo}}'


type {{nome_do_componente}}Props = ComponentProps<typeof {{nome_do_componente}}>

interface AdminProviderProps {
  children: ReactElement
  record: {{nome_do_componente}}Props['record']
}

const AdminProvider = (props: AdminProviderProps): ReactElement => {
  const { children, record } = props
  const theme = createTheme()

  return (
    <ThemeProvider theme={theme}>
      <RecordContextProvider value={record}>{children}</RecordContextProvider>
    </ThemeProvider>
  )
}

describe('{{nome_do_componente}} component', () => {
  it('', () => {
    const mockRecord = {
      id: '1',
    }

    mount(
      <AdminProvider record={mockRecord}>
        <{{nome_do_componente}}/>
      </AdminProvider>,
    )

    cy.getByDataTestId('status_chip_field').should(
      'have.text',
      ``,
    )
  })

  it('', () => {
    const mockRecord = {
      id: '1',
     }

    mount(
      <AdminProvider record={mockRecord}>
        <{{nome_do_componente}} />
      </AdminProvider>,
    )
    
    cy.getByDataTestId('status_chip_field').should('not.exist')
  })
})
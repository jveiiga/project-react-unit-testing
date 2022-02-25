import { findByAltText, getByPlaceholderText, queryByText, render, waitFor, screen, waitForElementToBeRemoved } from '@testing-library/react'
import userEvent  from '@testing-library/user-event'
import { unmountComponentAtNode } from 'react-dom';
import List from '../components/List'

describe('App Component', () => {
    it('should render list items', async () => {
        const { getByText, rerender, unmount, queryByText } = render(<List initialItems={['Diego', 'Rodz', 'Mayk']}/>)

        expect(getByText('Diego')).toBeInTheDocument()
        expect(getByText('Rodz')).toBeInTheDocument()
        expect(getByText('Mayk')).toBeInTheDocument()

        unmount()
        rerender(<List initialItems={['Julia']}/>)

        expect(getByText('Julia')).toBeInTheDocument()
        expect(queryByText('Mayk')).not.toBeInTheDocument()
    });

    //** Função de testes, adcionando elemento  **//
    
    it('should be able to add new item to the list', async () => {
        const { getByText, getByPlaceholderText, findByText } = render(<List initialItems={[]} />)
    
        const inputElement = getByPlaceholderText('Novo item');
        const addButton = getByText('Adicionar');
    
        userEvent.type(inputElement, 'Novo');
        userEvent.click(addButton);
    
        await waitFor(() => {
          expect(getByText('Novo')).toBeInTheDocument()
        })
      });

    //** Função de testes, removendo elemento  **//

    it('should be able to remove item to the list', async () => {
        const { getAllByText, queryByText } = render(<List initialItems={['Diego']}/>)

        const removeButtons = getAllByText('Remover');

        // debug()
        userEvent.click(removeButtons[0]);
        // debug()
        await waitFor(() => {
            expect(queryByText('Diego')).not.toBeInTheDocument()
        });
    })
})



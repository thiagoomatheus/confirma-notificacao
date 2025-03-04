const toast = {
  success: jest.fn((message, options) => {
    // Simula a exibição de um toast de sucesso
    // console.log(`[SUCCESS Toast]: ${message}`, options); // Opcional: Log para debug
    return {
      id: `success-${Math.random()}`, // Gera um ID simulado
      promise: jest.fn(), // Simula a função promise, se necessário
      dismiss: jest.fn(), // Simula a função dismiss
    };
  }),
  error: jest.fn((message, options) => {
    // Simula a exibição de um toast de erro
    // console.error(`[ERROR Toast]: ${message}`, options); // Opcional: Log para debug
    return {
      id: `error-${Math.random()}`, // Gera um ID simulado
      promise: jest.fn(), // Simula a função promise, se necessário
      dismiss: jest.fn(), // Simula a função dismiss
    };
  }),
  promise: jest.fn((promise, options) => {
    // Simula a exibição de um toast de promessa
    // console.log(`[PROMISE Toast]: Promise initiated`, options); // Opcional: Log para debug
    return {
      id: `promise-${Math.random()}`, // Gera um ID simulado
      success: jest.fn((message) => console.log(`[PROMISE Toast Success]: ${message}`)), //Simula o callback de sucesso
      error: jest.fn((message) => console.error(`[PROMISE Toast Error]: ${message}`)), // Simula o callback de erro
      promise: jest.fn(), // Simula a função promise, se necessário
      dismiss: jest.fn(), // Simula a função dismiss
    };
  }),
  custom: jest.fn((element, options) => {
    // Simula a exibição de um toast customizado
    // console.log(`[CUSTOM Toast]: Displaying custom element`, {element, options}); // Opcional: Log para debug
    return {
      id: `custom-${Math.random()}`, // Gera um ID simulado
      promise: jest.fn(), // Simula a função promise, se necessário
      dismiss: jest.fn(), // Simula a função dismiss
    };
  }),
  loading: jest.fn((message, options) => {
    // Simula a exibição de um toast de loading
    // console.log(`[LOADING Toast]: ${message}`, options); // Opcional: Log para debug
    return {
      id: `loading-${Math.random()}`, // Gera um ID simulado
      promise: jest.fn(), // Simula a função promise, se necessário
      dismiss: jest.fn(), // Simula a função dismiss
    };
  }),
  remove: jest.fn((toastId) => {
    // Simula a remoção de um toast específico
    // console.log(`[REMOVE Toast]: Removing toast with ID: ${toastId}`); // Opcional: Log para debug
  }),
  dismiss: jest.fn((toastId) => {
    // Simula a remoção de um toast específico
    // console.log(`[DISMISS Toast]: Dismissing toast with ID: ${toastId}`); // Opcional: Log para debug
  }),
  isActive: jest.fn((toastId) => {
    // Simula a verificação se um toast está ativo
    // console.log(`[isActive Toast]: Checking if toast with ID: ${toastId} is active`); // Opcional: Log para debug
    return false; // Retorna um valor booleano. Adapte-o conforme a sua necessidade.
  }),
  // Adicione outras funções da lib que você utiliza aqui, como `toast.update`, `toast.only`, etc.
};

export default toast;
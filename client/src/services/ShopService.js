const apiUrl = 'http://127.0.0.1:8000/api';


export const getBooks = async () => {
    const response = await fetch(`${apiUrl}/books`);
  
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to fetch books');
    }
  
    return response.json();
  };
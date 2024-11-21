export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export const getUsers = async (): Promise<User[]> => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error; // Biarkan error diteruskan ke pemanggil
  }
};

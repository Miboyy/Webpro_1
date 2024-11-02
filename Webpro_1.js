// Contoh Async/Await
async function fetchData() {
    try {
      // Simulasi pengambilan data dari server
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const data = { name: 'John Doe', age: 30 };
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  async function main() {
    try {
      const data = await fetchData();
      console.log('Data retrieved:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  main();
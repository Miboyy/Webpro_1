// Contoh Promise
function fetchData() {
    return new Promise((resolve, reject) => {
      // Simulasi pengambilan data dari server
      setTimeout(() => {
        const data = { name: 'John Doe', age: 30 };
        resolve(data);
      }, 2000);
    });
  }
  
  fetchData()
    .then((data) => {
      console.log('Data retrieved:', data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
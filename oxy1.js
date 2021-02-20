window.addEventListener('load', setup);

async function setup() {
  const ctx = document.getElementById('myChart').getContext('2d');
  const globalTemps = await getData();
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: globalTemps.years,
      datasets: [
        {
          label: 'oxygen saturation level in %',
          data: globalTemps.temps,
          fill: false,
          borderColor:'rgba(123, 239, 178, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          borderWidth: 2
        }
      ]
    },
    options: {}
  });
}

async function getData() {
  // const response = await fetch('testdata.csv');
  const response = await fetch('Od_1.csv');
  const data = await response.text();
  const years = [];
  const temps = [];
  const rows = data.split('\n').slice(1);
  rows.forEach(row => {
    const cols = row.split(',');
    years.push(cols[0]);
   
    temps.push(parseFloat(cols[1]));
  });
  return { years, temps };
}





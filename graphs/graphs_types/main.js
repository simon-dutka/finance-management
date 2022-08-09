const main = () => {
    let data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                backgroundColor: 'rgb(64, 189, 152)',
                borderColor: 'rgb(64, 189, 152)',
                data: [0, 50, 60, 76, 162, 200, 320],
            },
        ],
    };

    const config = {
        type: 'doughnut',
        data: data,
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        options: {
            plugins: {
                legend: {
                    position: 'bottom',
                },
            },
        },
    };

    const mainGraph = new Chart(document.getElementById('main-graph'), config);
};

export default main;

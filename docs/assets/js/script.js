document.addEventListener('DOMContentLoaded', () => {
    const createChart = (ctx, title, runtimeData, memoryData, isMemory = false) => {
        return new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['CLIQUE', 'Bron-Kerbosch', 'Arboricity'],
                datasets: [{
                    label: isMemory ? 'Memory (MB)' : 'Runtime (ms)',
                    data: isMemory ? memoryData : runtimeData,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.7)',
                        'rgba(54, 162, 235, 0.7)',
                        'rgba(75, 192, 192, 0.7)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(75, 192, 192, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                indexAxis: 'y',
                scales: {
                    x: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: isMemory ? 'Megabytes (MB)' : 'Milliseconds (ms)'
                        }
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: title
                    },
                    legend: {
                        display: false
                    }
                }
            }
        });
    };

    // ======================================================
    // REPLACE THESE VALUES WITH YOUR ACTUAL MEASUREMENTS
    // ======================================================
    
    // Autonomous Systems Data
    const asRuntime =[3200, 1500, 2100];
    const asMemory = [512, 256, 128]; 
    
    // Wikipedia Votes Data
    const wikiRuntime = [3200, 1500, 2100];
    const wikiMemory = [512, 256, 128]; 
    // Enron Emails Data
    const enronRuntime = [3200, 1500, 2100];
    const enronMemory = [512, 256, 128]; 

    // ======================================================
    // CHART INITIALIZATION
    // ======================================================
    
    // Runtime Charts
    createChart(
        document.getElementById('runtimeAS').getContext('2d'),
        'Autonomous Systems Runtime',
        asRuntime
    );
    
    createChart(
        document.getElementById('runtimeWiki').getContext('2d'),
        'Wikipedia Votes Runtime',
        wikiRuntime
    );
    
    createChart(
        document.getElementById('runtimeEnron').getContext('2d'),
        'Enron Emails Runtime',
        enronRuntime
    );

    // Memory Charts
    createChart(
        document.getElementById('memoryAS').getContext('2d'),
        'Autonomous Systems Memory',
        null,
        asMemory,
        true
    );
    
    createChart(
        document.getElementById('memoryWiki').getContext('2d'),
        'Wikipedia Votes Memory',
        null,
        wikiMemory,
        true
    );
    
    createChart(
        document.getElementById('memoryEnron').getContext('2d'),
        'Enron Emails Memory',
        null,
        enronMemory,
        true
    );
});
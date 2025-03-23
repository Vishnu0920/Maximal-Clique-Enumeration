document.addEventListener('DOMContentLoaded', () => {
    // Function to create runtime charts (Used in results.html)
    const createRuntimeChart = (ctx, title, runtimeData) => {
        return new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Bron-Kerbosch', 'Chiba Arboricity', 'ELS'],
                datasets: [{
                    label: 'Runtime (s)',
                    data: runtimeData,
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.7)',
                        'rgba(75, 192, 192, 0.7)',
                        'rgba(255, 206, 86, 0.7)'
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(255, 206, 86, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                indexAxis: 'x', // Vertical bars (default)
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Seconds (s)'
                        }
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: title,
                        position: 'top', // Move title to the top
                        padding: {
                            top: 10, // Add padding above the title
                            bottom: 20 // Add padding below the title
                        },
                        font: {
                            size: 16,
                            weight: 'bold'
                        }
                    },
                    legend: {
                        display: false
                    },
                    datalabels: { // Plugin to display exact values on top of bars
                        anchor: 'end',
                        align: 'end', // Align the label to the end of the bar (top)
                        offset: 0, // No extra offset
                        formatter: function (value) {
                            return value !== null ? value.toFixed(3) + 's' : 'N/A'; // Display time with 3 decimal places
                        },
                        font: {
                            weight: 'bold',
                            size: 12
                        }
                    }
                }
            },
            plugins: [ChartDataLabels] // Enable the datalabels plugin
        });
    };

    // Check if we are on results.html before creating runtime charts
    if (document.getElementById('runtimeWiki')) {
        createRuntimeChart(
            document.getElementById('runtimeWiki').getContext('2d'),
            'Wikipedia Votes Runtime',
            [null, 781, 0.914] // ELS runtime in seconds
        );
    }

    if (document.getElementById('runtimeEnron')) {
        createRuntimeChart(
            document.getElementById('runtimeEnron').getContext('2d'),
            'Enron Emails Runtime',
            [null, 1798, 0.694] // ELS runtime in seconds
        );
    }

    if (document.getElementById('runtimeSkitter')) {
        createRuntimeChart(
            document.getElementById('runtimeSkitter').getContext('2d'),
            'Skitter Network Runtime',
            [null, null, 150.374] // ELS runtime in seconds
        );
    }

    // Function to create clique distribution charts (Used in datasets.html)
    const createCliqueChart = (ctx, title, labels, data) => {
        return new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Number of Cliques',
                    data: data,
                    backgroundColor: 'rgba(54, 162, 235, 0.7)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    x: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Clique Size'
                        }
                    },
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Frequency'
                        }
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: title,
                        position: 'top', // Move title to the top
                        padding: {
                            top: 10, // Add padding above the title
                            bottom: 20 // Add padding below the title
                        },
                        font: {
                            size: 16,
                            weight: 'bold'
                        }
                    }
                }
            }
        });
    };

    // Clique size distribution data (Including ELS)
    const cliqueData = {
        enron: {
            labels: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            data: [14070, 7077, 13319, 18143, 22715, 25896, 24766, 22884, 21393, 17833, 15181, 11487, 7417, 3157, 1178, 286, 41, 10, 6]
        },
        wiki: {
            labels: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
            data: [8655, 13718, 27292, 48416, 68872, 83266, 76732, 54456, 35470, 21736, 11640, 5449, 2329, 740, 208, 23]
        },
        skitter: {
            labels: Array.from({ length: 67 - 2 + 1 }, (_, i) => i + 2), // Sizes from 2 to 67
            data: [
                2319807, 3171609, 1823321, 939336, 684873, 598284, 588889, 608937, 665661, 728098,
                798073, 877282, 945194, 980831, 939987, 839330, 729601, 639413, 600192, 611976,
                640890, 673924, 706753, 753633, 818353, 892719, 955212, 999860, 1034106, 1055653,
                1017560, 946717, 878552, 809485, 744634, 663650, 583922, 520239, 474301, 420796,
                367879, 321829, 275995, 222461, 158352, 99522, 62437, 39822, 30011, 25637,
                17707, 9514, 3737, 2042, 1080, 546, 449, 447, 405, 283, 242, 146, 84, 49, 22, 4
            ]
        }
    };

    // Check if we are on datasets.html before creating clique distribution charts
    if (document.getElementById('cliqueDistEnron')) {
        createCliqueChart(
            document.getElementById('cliqueDistEnron').getContext('2d'),
            'Enron Email Network - Clique Size Distribution (ELS)',
            cliqueData.enron.labels,
            cliqueData.enron.data
        );
    }

    if (document.getElementById('cliqueDistWiki')) {
        createCliqueChart(
            document.getElementById('cliqueDistWiki').getContext('2d'),
            'Wikipedia Vote Network - Clique Size Distribution (ELS)',
            cliqueData.wiki.labels,
            cliqueData.wiki.data
        );
    }

    if (document.getElementById('cliqueDistSkitter')) {
        createCliqueChart(
            document.getElementById('cliqueDistSkitter').getContext('2d'),
            'Skitter Network - Clique Size Distribution (ELS)',
            cliqueData.skitter.labels,
            cliqueData.skitter.data
        );
    }
});
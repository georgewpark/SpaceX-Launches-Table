window.addEventListener("DOMContentLoaded", () => {

    const tableBody = document.querySelector('tbody');
    let tableRows = '';

    tableBody.innerHTML = `<tr><td data-label="Loading" colspan="7"><div class="loader"></div></td></tr>`;

    fetch('https://api.spacexdata.com/v2/launches/')
        .then(res => res.json())
        .then(launches =>
            launches.forEach(launch =>
                tableRows +=
                `<tr>
                    <td data-label="Mission Name">${launch.mission_name}</td>
                    <td data-label="Mission Patch"><img src="${launch.links.mission_patch_small}" alt="${launch.mission_name} Mission Patch"></td>
                    <td data-label="Rocket Name">${launch.rocket.rocket_name}</td>
                    <td data-label="Launch Site">${launch.launch_site.site_name_long}</td>
                    <td data-label="Launch Year">${launch.launch_year}</td>
                    <td data-label="Launch Success">${launch.launch_success ? 'Yes' : 'No'}</td>
                    <td data-label="Mission Details">${launch.details ? launch.details : 'No details available for this mission.'}</td>
                </tr>`))
        .catch(() => tableRows = `<tr><td data-label="Error" colspan="7">Launch data unavailable.</td></tr>`)
        .finally(() => tableBody.innerHTML = tableRows);
});

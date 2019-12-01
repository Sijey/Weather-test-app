export const loadData = url => fetch(url)
    .then(response => response.json());

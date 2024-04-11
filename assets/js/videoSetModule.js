export const VideoSetModule = (() => {    
    const insertVideoDetail = (id, url) => {
        const iframe = document.getElementById(id);
        iframe.setAttribute('src', url);        
    };

    const getInsertVideoDetail = (id, url) => {
        return insertVideoDetail(id, url);
    };

    return {
        getInsertVideoDetail
    }
})();
const DataSource = () => {
    let comments =  [
        {id: 1, name: 'A1' },
        {id: 2, name: 'A2' },
        {id: 3, name: 'A3' },
        {id: 4, name: 'A4' },
        {id: 5, name: 'A5' }
    ];
    return {
        getComments: function() { 
            return comments;
        },
        getBlogPost: function(id) {
            return comments.find((item) => {
                if(item.id == id) return item;
            });
        },
        addChangeListener: function() {

        },
        removeChangeListener: function() {

        }
    };
};
const dataSource = DataSource();
export default dataSource;
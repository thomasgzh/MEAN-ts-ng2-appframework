/**
 * Created by thomas on 2016/2/27.
 */
import {$http} from './xhr-factory';

export const TodoFactory = {

    getAll :function(){
        return $http.get('/todos/');
    },

    get:function(id){
        return $http.get('/todo/'+id);
    },

    save: function(todo){
        return $http.post('/todo', todo);
    },

    update: function(todo){
        return $http.put('/todo/'+todo._id, todo);
    },

    delete: function(id){
        return $http.delete('/todo/'+id);
    }

};
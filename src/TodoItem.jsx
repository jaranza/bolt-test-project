import React from 'react';

    function TodoItem({ todo }) {
      // Implement the todo item functionality here

      return (
        <div className="flex justify-between items-center p-4 bg-gray-200 rounded-lg">
          <div className="flex items-center space-x-4">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-blue-600 focus:ring-blue-500"
              // Implement the checkbox functionality here
            />
            <p className="text-lg font-medium text-gray-900">{todo.text}</p>
          </div>
          <button
            className="text-red-500 hover:underline"
            // Implement the delete button functionality here
          >
            Delete
          </button>
        </div>
      );
    }

    export default TodoItem;

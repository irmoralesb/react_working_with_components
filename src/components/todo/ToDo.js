import next from "next";
import ErrorBoundary from "../common/ErrorBoundary";
import ToDoItemText from "./ToDoItemText";
import { memo } from "react";

const Inner = ({
  todoItem,
  handleToggleCompleted,
  handleDelete,
  handleEdit,
  idUpdating,
}) => {
  return (
    <div
      key={todoItem.id}
      className={
        todoItem.completed ? "single-task completed" : "single-task"
      }
    >
      <div
        onClick={() => {
          return handleToggleCompleted(todoItem.id);
        }}
      >
        <ToDoItemText important={todoItem.important} todoText={todoItem.todoText}/>
      </div>

      {idUpdating === todoItem.id ? (
        <button
          className="btn btn-primary busy-spinner"
          type="button"
          disabled
        >
          <span
            className="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Loading...</span>
        </button>
      ) : null}

      <div className="task-actions">
        <button
          className="btn edit"
          title="Edit"
          onClick={() => handleEdit(todoItem)}
        >
          <i className="fas fa-pencil-alt"></i>
        </button>

        <button
          className="btn delete"
          title="Delete"
          onClick={() => {
            const response = window.confirm("Delete?");
            if (response) {
              handleDelete(todoItem.id);
            }
          }}
        >
          <i className="far fa-trash-alt"></i>
        </button>
      </div>
    </div>
  );
};


const TodoErrorBoundary = (props) => {
  return (
    <div className="single-task text-bg-danger">
      <b>Error processing ToDo: {JSON.stringify(props)}</b>
    </div>
  )
}

const ToDo = (props) => {
  return (
    <ErrorBoundary errorUI={<TodoErrorBoundary {...props} />}>
      <Inner {...props} />
    </ErrorBoundary>
  )
}

//When passing function or extra logic is needed we can use the second parameter of memo
// which is a function with the old and new props
export default memo(ToDo, (prevProps, nextProps) => {
  return (
    prevProps.todoItem.completed != nextProps.todoItem.completed ||
    prevProps.todoItem.important != nextProps.todoItem.important ||
    prevProps.idUpdating === prevProps.todoItem.idUpdating || //Detecting the id the spin has
    nextProps.idUpdating === nextProps.todoItem.idUpdating
  );
});

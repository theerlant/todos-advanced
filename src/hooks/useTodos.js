import { useSelector, useDispatch } from "react-redux";
import { useEffect, useMemo } from "react";
import {
  fetchItems,
  removeItem,
  toggleComplete,
  setTodoInput,
  setTodoError,
  addItem,
} from "../store/actions/todoActions";

export function useTodos() {
  const { items, loading, error, todoInput, todoError, nextId } = useSelector(
    (state) => state.todos,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const completedCount = useMemo(() => {
    let count = 0;
    items.forEach((item) => {
      if (item.completed) count++;
    });
    return count;
  }, [items]);

  const handleToggle = (id) => dispatch(toggleComplete(id));
  const handleDelete = (id) => dispatch(removeItem(id));

  const handleAddTodoChange = (e) => {
    dispatch(setTodoInput(e.target.value));
  };

  const handleAddTodoSubmit = (e) => {
    e.preventDefault();
    const trimmedInput = todoInput.trim();

    if (!trimmedInput) {
      dispatch(setTodoError("Todo tidak boleh kosong"));
      return;
    }

    dispatch(
      addItem({
        id: nextId,
        title: trimmedInput,
        completed: false,
      }),
    );
  };

  return {
    items,
    loading,
    error,
    todoInput,
    todoError,
    completedCount,
    handleToggle,
    handleDelete,
    handleAddTodoChange,
    handleAddTodoSubmit,
  };
}

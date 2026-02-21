import { useSelector, useDispatch } from "react-redux";
import { useEffect, useMemo, useCallback } from "react";
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

  const handleToggle = useCallback(
    (id) => dispatch(toggleComplete(id)),
    [dispatch],
  );
  const handleDelete = useCallback(
    (id) => dispatch(removeItem(id)),
    [dispatch],
  );

  const handleAddTodoChange = useCallback(
    (e) => {
      dispatch(setTodoInput(e.target.value));
    },
    [dispatch],
  );

  const handleAddTodoSubmit = useCallback(
    (e) => {
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
    },
    [dispatch, todoInput, nextId],
  );

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

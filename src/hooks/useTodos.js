import { useSelector, useDispatch } from "react-redux";
import { useEffect, useMemo } from "react";
import {
  fetchItems,
  removeItem,
  toggleComplete,
} from "../store/actions/todoActions";

export function useTodos() {
  const { items, loading, error } = useSelector((state) => state.todos);
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

  return {
    items,
    loading,
    error,
    completedCount,
    handleToggle,
    handleDelete,
  };
}

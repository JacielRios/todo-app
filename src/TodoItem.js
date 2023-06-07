function TodoItem({text, completed}) {
  return (
    <li>
      <span>✅</span>
      <p>{text}</p>
      <span>❌</span>
    </li>
  );
}

export { TodoItem };

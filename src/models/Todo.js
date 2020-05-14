export type Todo = {
  /** Todo title */
  title: string,
  /* Date when the todo gotta be done */
  dueTo?: Date,
  /** Date when the todo was created */
  creationDate?: Date,
  /** Todo was done */
  done?: boolean
}
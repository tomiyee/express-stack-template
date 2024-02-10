import { CreationOptional, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import User from "./User.js";

class Task extends Model<InferAttributes<Task>, InferCreationAttributes<Task>> {
  declare id: CreationOptional<string>;
  /** The description of the Task  */
  declare description: string;
  /** Marks whether the task is completed */
  declare completed: boolean;
}

Task.belongsTo(User, { foreignKey: 'authorId' });

export default Task;
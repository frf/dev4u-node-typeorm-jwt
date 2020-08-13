"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
class Connection1597271344619 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "connections",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true
                }
            ]
        }), true);
    }
    async down(queryRunner) {
        // const table = await queryRunner.getTable("connections");
        // const foreignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf("questionId") !== -1);
        // await queryRunner.dropForeignKey("question", foreignKey);
        // await queryRunner.dropColumn("question", "questionId");
        await queryRunner.dropTable("connections");
        // await queryRunner.dropIndex("question", "IDX_QUESTION_NAME");
        // await queryRunner.dropTable("question");
    }
}
exports.Connection1597271344619 = Connection1597271344619;

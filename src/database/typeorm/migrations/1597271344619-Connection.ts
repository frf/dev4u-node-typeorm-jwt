import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Connection1597271344619 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "connections",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true
                }
            ]
        }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // const table = await queryRunner.getTable("connections");
        // const foreignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf("questionId") !== -1);
        // await queryRunner.dropForeignKey("question", foreignKey);
        // await queryRunner.dropColumn("question", "questionId");
        await queryRunner.dropTable("connections");
        // await queryRunner.dropIndex("question", "IDX_QUESTION_NAME");
        // await queryRunner.dropTable("question");
    }

}

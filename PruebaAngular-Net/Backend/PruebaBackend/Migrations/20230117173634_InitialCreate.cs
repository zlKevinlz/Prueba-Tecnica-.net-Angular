using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PruebaBackend.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Person",
                columns: table => new
                {
                    Idperson = table.Column<int>(name: "Id_person", type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Datecreated = table.Column<DateTime>(name: "Date_created", type: "datetime2", nullable: true),
                    fullname = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    dniconctype = table.Column<string>(name: "dni_conc_type", type: "nvarchar(max)", nullable: true),
                    Names = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Surnames = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DNI = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DNItype = table.Column<string>(name: "DNI_type", type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Person", x => x.Idperson);
                });

            migrationBuilder.CreateTable(
                name: "User",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Username = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Datecreated = table.Column<DateTime>(name: "Date_created", type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Person");

            migrationBuilder.DropTable(
                name: "User");
        }
    }
}

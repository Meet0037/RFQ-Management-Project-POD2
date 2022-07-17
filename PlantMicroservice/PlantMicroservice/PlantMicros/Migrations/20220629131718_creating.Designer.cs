﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using PlantMicros.Data;

#nullable disable

namespace PlantMicros.Migrations
{
    [DbContext(typeof(PlantDbContext))]
    [Migration("20220629131718_creating")]
    partial class creating
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.6")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("PlantMicros.Models.Demand", b =>
                {
                    b.Property<int>("DemandId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("DemandId"), 1L, 1);

                    b.Property<int>("DemandCount")
                        .HasColumnType("int");

                    b.Property<DateTime>("DemandRaisedDate")
                        .HasColumnType("datetime2");

                    b.Property<int>("PartId")
                        .HasColumnType("int");

                    b.HasKey("DemandId");

                    b.ToTable("Demands");
                });

            modelBuilder.Entity("PlantMicros.Models.Part", b =>
                {
                    b.Property<int>("PartId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("PartId"), 1L, 1);

                    b.Property<string>("PartDescription")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PartSpecification")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("StockInHand")
                        .HasColumnType("int");

                    b.HasKey("PartId");

                    b.ToTable("Parts");
                });

            modelBuilder.Entity("PlantMicros.Models.PlantReorderDetails", b =>
                {
                    b.Property<int>("PlantReorderId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("PlantReorderId"), 1L, 1);

                    b.Property<string>("PartDetails")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("PartId")
                        .HasColumnType("int");

                    b.Property<DateTime>("ReorderDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("ReorderStatus")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("PlantReorderId");

                    b.ToTable("PlantReoDetail");
                });

            modelBuilder.Entity("PlantMicros.Models.ReorderRules", b =>
                {
                    b.Property<int>("ReorderId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ReorderId"), 1L, 1);

                    b.Property<int>("DemandId")
                        .HasColumnType("int");

                    b.Property<int>("MaxQuantity")
                        .HasColumnType("int");

                    b.Property<int>("MinQuantity")
                        .HasColumnType("int");

                    b.Property<int>("PartId")
                        .HasColumnType("int");

                    b.Property<int>("ReorderFrequency")
                        .HasColumnType("int");

                    b.HasKey("ReorderId");

                    b.ToTable("ReoRule");
                });
#pragma warning restore 612, 618
        }
    }
}

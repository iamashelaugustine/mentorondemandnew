using Microsoft.EntityFrameworkCore;
using AdminLibrary.Models;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;
using SharedLibrary.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using MentorLibrary.Models;
using StudentLibrary.Models;

namespace AuthLibrary.Models
{
    public class MODContext : IdentityDbContext
    {

        public MODContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<IdentityRole>(r => r.HasData(new IdentityRole
            {
                Id = "1",
                Name = "Admin",
                NormalizedName = "Admin"
            },
            new IdentityRole
            {
                Id = "2",
                Name = "Mentor",
                NormalizedName = "Mentor"
            },
            new IdentityRole
            {
                Id = "3",
                Name = "Student",
                NormalizedName = "Student"
            }));
            base.OnModelCreating(builder);
        }

        public DbSet<MODUser> MODUsers { get; set; }        
        public DbSet<Skill> Skills { get; set; }
        public DbSet<Technology> Technologies { get; set; }
        public DbSet<Course> Courses { get; set; }
        public DbSet<MentorProfile> Mentorprofiles { get; set; }
        public DbSet<Training> Trainings { get; set; }
    }
}

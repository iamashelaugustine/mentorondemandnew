using AuthLibrary.Models;
using MentorLibrary.Models;
using SharedLibrary.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;


namespace MentorLibrary.Repositories
{
    public class MentorRepository: IMentorRepository
    {
        MentorContext context;
        public MentorRepository(MentorContext context)
        {
            this.context = context;
        }

        public MODUser GetMentor(string mentormail)
        {
            var mentor = (from a in context.MODUsers
                          where a.Email == mentormail
                          select a).First();
            return mentor;
        }

        public bool AddCourse(Course crs)
        {
            try
            {
                var course = new Course
                {
                    TechnologyId = crs.TechnologyId,
                    MentorId = crs.MentorId,
                    TechnologyName = crs.TechnologyName,
                    Commission = crs.Commission,
                    StartDate = crs.StartDate,
                    EndDate = crs.EndDate,
                    CourseFee = crs.CourseFee
                };
                context.Courses.Add(course);
                int result = context.SaveChanges();
                if (result > 0)
                {
                    return true;
                }
                return false;
            }
            catch (Exception e)
            {

                throw;
            }
        }

        public IEnumerable<Course> GetCourseList(string id)
        {
            var course = from a in context.Courses
                         where a.MentorId == id && a.EndDate >= DateTime.Today
                         select a;
            return course;
        }

        public IEnumerable<Course> GetCompletedCourseList(string id)
        {
            var course = from a in context.Courses
                         where a.MentorId == id && a.EndDate <= DateTime.Today
                         select a;
            return course;
        }

        public IEnumerable<Course> GetCourses()
        {
            var courses = from a in context.Courses
                          select a;
            return courses;
        }

        public bool UpdateProfile(MentorProfile profile)
        {
            try
            {
                var prof = new MentorProfile
                {
                    MentorId = profile.MentorId,
                    Name = profile.Name,
                    LinkedinId = profile.LinkedinId,
                    Experience = profile.Experience,
                    TimeSlot = profile.TimeSlot

                };
                context.Mentorprofiles.Add(prof);
                int result = context.SaveChanges();
                if (result > 0)
                {
                    return true;
                }
                return false;
            }
            catch (Exception e)
            {

                throw;
            }
        }

       
    }
}

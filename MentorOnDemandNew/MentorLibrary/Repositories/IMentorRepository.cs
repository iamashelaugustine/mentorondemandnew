using MentorLibrary.Models;
using SharedLibrary.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace MentorLibrary.Repositories
{
    public interface IMentorRepository
    {
        public MODUser GetMentor(string mentormail);
        public bool AddCourse(Course course);
        public IEnumerable<Course> GetCourseList(string id);
        public IEnumerable<Course> GetCompletedCourseList(string id);
        public IEnumerable<Course> GetCourses();
        public bool UpdateProfile(MentorProfile profile);
        
    }
}

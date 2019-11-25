using System;
using System.Collections.Generic;
using System.Text;
using AdminLibrary.Models;
using SharedLibrary;
using SharedLibrary.Models;

namespace AdminLibrary.Repositories
{
    public interface IAdminRepository
    {
        bool AddSkill(Skill model);
        public IEnumerable<MODUser> GetStudents();

        public IEnumerable<MODUser> GetMentors();
        MODUser GetUser(string id);
        bool DeleteUser(MODUser user);
        bool BlockUser(MODUser user);
        bool UnblockUser(MODUser user);

        public bool AddTechnology(Technology technology);
        public IEnumerable<Technology> GetTechnologies();

        Technology GetTechnology(int id);
        public bool UpdateTechnology(Technology technology);
        bool DeleteTechnology(Technology technology);
       
    }
}

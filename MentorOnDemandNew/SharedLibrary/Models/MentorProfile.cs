﻿using System;
using System.Collections.Generic;
using System.Text;

namespace MentorLibrary.Models
{
    public class MentorProfile
    {
        public int Id { get; set; }
        public string MentorId { get; set; }
        public string Name { get; set; }
        public string Experience { get; set; }
        public string LinkedinId { get; set; }
        public string TimeSlot { get; set; }
    }
}

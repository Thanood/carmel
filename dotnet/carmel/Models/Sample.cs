﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Carmel.Models
{
    public class Sample
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Order { get; set; }
        public string gist { get; set; }
        public List<SampleTag> sampleTags { get; set; }
    }
}

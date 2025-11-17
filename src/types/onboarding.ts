export interface OnboardingRequirement {
  id: string;
  title: string;
  description: string;
  duration?: string;
  responsible?: string;
  checklist?: string[];
}

export interface OnboardingStage {
  id: string;
  title: string;
  description: string;
  requirements: OnboardingRequirement[];
  category?: 'initial' | 'classification' | 'configuration' | 'training' | 'assessment';
}

export const onboardingStages: OnboardingStage[] = [
  {
    id: 'user-jd-gathering',
    title: 'User & JD Gathering',
    description: 'Collect user information and job description details for efficient orientation',
    category: 'initial',
    requirements: [
      {
        id: 'req-1',
        title: 'Personal Information Collection',
        description: 'Gather employee personal details and documentation',
        duration: '30 minutes',
        responsible: 'HR Department',
        checklist: [
          'Full name and contact information',
          'Emergency contact details',
          'Government-issued ID verification',
          'Banking information for payroll',
          'Tax documentation'
        ]
      },
      {
        id: 'req-2',
        title: 'Job Description Review',
        description: 'Review and confirm job role, responsibilities, and expectations',
        duration: '45 minutes',
        responsible: 'HR & Direct Manager',
        checklist: [
          'Job title and department confirmation',
          'Key responsibilities and deliverables',
          'Performance metrics and KPIs',
          'Reporting structure',
          'Work schedule and location details'
        ]
      },
      {
        id: 'req-3',
        title: 'Skills Assessment',
        description: 'Evaluate current skill set and identify training needs',
        duration: '1 hour',
        responsible: 'Department Lead',
        checklist: [
          'Technical skills inventory',
          'Software proficiency check',
          'Previous experience relevance',
          'Certification verification',
          'Training gap identification'
        ]
      }
    ]
  },
  {
    id: 'work-classification',
    title: 'Work Classification & Batching',
    description: 'Group similar work and related jobs into efficient batches',
    category: 'classification',
    requirements: [
      {
        id: 'req-4',
        title: 'Role Categorization',
        description: 'Classify employee role into appropriate work streams',
        duration: '20 minutes',
        responsible: 'HR Operations',
        checklist: [
          'Department assignment',
          'Project team allocation',
          'Cross-functional group identification',
          'Work stream classification',
          'Peer group identification'
        ]
      },
      {
        id: 'req-5',
        title: 'Batch Assignment',
        description: 'Assign to onboarding batch with similar roles',
        duration: '15 minutes',
        responsible: 'HR Coordinator',
        checklist: [
          'Identify employees with similar roles',
          'Group by start date proximity',
          'Consider department clustering',
          'Schedule group sessions',
          'Create batch communication channel'
        ]
      },
      {
        id: 'req-6',
        title: 'Custom Learning Path',
        description: 'Design personalized onboarding track based on role',
        duration: '30 minutes',
        responsible: 'Learning & Development',
        checklist: [
          'Role-specific modules selection',
          'Timeline customization',
          'Mentor assignment',
          'Resource allocation',
          'Milestone planning'
        ]
      }
    ]
  },
  {
    id: 'manager-session',
    title: 'Manager Orientation Session',
    description: 'Dedicated session for managers with leadership-specific content',
    category: 'training',
    requirements: [
      {
        id: 'req-7',
        title: 'Leadership Onboarding',
        description: 'Specialized orientation for managers and team leads',
        duration: '2 hours',
        responsible: 'Senior Management',
        checklist: [
          'Company leadership philosophy',
          'Team management tools and systems',
          'Performance review processes',
          'Budget and resource management',
          'HR policies for managers',
          'Conflict resolution procedures'
        ]
      },
      {
        id: 'req-8',
        title: 'Team Introduction',
        description: 'Meet and introduce to team members',
        duration: '1 hour',
        responsible: 'Department Head',
        checklist: [
          'Team structure overview',
          'Individual team member introductions',
          'Current projects briefing',
          'Team goals and objectives',
          'Communication protocols'
        ]
      },
      {
        id: 'req-9',
        title: 'Strategic Alignment',
        description: 'Align with company strategy and department goals',
        duration: '1.5 hours',
        responsible: 'Executive Team',
        checklist: [
          'Company vision and mission',
          'Strategic objectives review',
          'Department goals alignment',
          'Quarterly targets',
          'Success metrics'
        ]
      }
    ]
  },
  {
    id: 'access-configuration',
    title: 'Access Rights Configuration',
    description: 'Configure system access rights and permissions',
    category: 'configuration',
    requirements: [
      {
        id: 'req-10',
        title: 'IT Account Setup',
        description: 'Create and configure all necessary IT accounts',
        duration: '45 minutes',
        responsible: 'IT Department',
        checklist: [
          'Email account creation',
          'Active Directory setup',
          'VPN access configuration',
          'Single Sign-On (SSO) setup',
          'Password policy briefing'
        ]
      },
      {
        id: 'req-11',
        title: 'System Access Provisioning',
        description: 'Grant access to required systems and applications',
        duration: '1 hour',
        responsible: 'IT Security',
        checklist: [
          'CRM system access',
          'Project management tools',
          'Communication platforms',
          'File storage systems',
          'Department-specific software',
          'Mobile device management'
        ]
      },
      {
        id: 'req-12',
        title: 'Security Training',
        description: 'Complete mandatory security and compliance training',
        duration: '1.5 hours',
        responsible: 'IT Security',
        checklist: [
          'Information security policies',
          'Data protection guidelines',
          'Password management',
          'Phishing awareness',
          'Compliance requirements',
          'Incident reporting procedures'
        ]
      }
    ]
  },
  {
    id: 'system-training',
    title: 'System Training',
    description: 'Comprehensive training on company systems and tools',
    category: 'training',
    requirements: [
      {
        id: 'req-13',
        title: 'Core Systems Training',
        description: 'Training on essential company-wide systems',
        duration: '2 hours',
        responsible: 'Training Team',
        checklist: [
          'Email and calendar management',
          'Document management system',
          'Time tracking system',
          'Expense reporting',
          'HR self-service portal',
          'Internal communication tools'
        ]
      },
      {
        id: 'req-14',
        title: 'Role-Specific Tools',
        description: 'Training on job-specific applications and tools',
        duration: '3 hours',
        responsible: 'Department Trainer',
        checklist: [
          'Primary work applications',
          'Specialized software training',
          'Workflow processes',
          'Reporting tools',
          'Data entry procedures',
          'Quality assurance processes'
        ]
      },
      {
        id: 'req-15',
        title: 'Collaboration Tools',
        description: 'Learn to use team collaboration platforms',
        duration: '1 hour',
        responsible: 'IT Training',
        checklist: [
          'Video conferencing setup',
          'Team chat applications',
          'Project management tools',
          'Shared workspace platforms',
          'File sharing protocols',
          'Meeting best practices'
        ]
      }
    ]
  },
  {
    id: 'open-discussion',
    title: 'Open Discussion Sessions',
    description: 'Interactive sessions for questions, concerns, and networking',
    category: 'training',
    requirements: [
      {
        id: 'req-16',
        title: 'Q&A Session',
        description: 'Open forum for questions and clarifications',
        duration: '1 hour',
        responsible: 'HR & Manager',
        checklist: [
          'Address onboarding questions',
          'Clarify role expectations',
          'Discuss concerns',
          'Provide additional resources',
          'Schedule follow-up if needed'
        ]
      },
      {
        id: 'req-17',
        title: 'Peer Networking',
        description: 'Connect with fellow new hires and team members',
        duration: '1.5 hours',
        responsible: 'Employee Engagement',
        checklist: [
          'Introduction to onboarding cohort',
          'Team building activities',
          'Buddy system assignment',
          'Social interaction opportunities',
          'Cross-department networking'
        ]
      },
      {
        id: 'req-18',
        title: 'Company Culture Session',
        description: 'Learn about company values, culture, and community',
        duration: '1 hour',
        responsible: 'Culture Team',
        checklist: [
          'Company values deep-dive',
          'Cultural norms and practices',
          'Employee resource groups',
          'Community involvement',
          'Work-life balance initiatives'
        ]
      }
    ]
  },
  {
    id: 'materials-sharing',
    title: 'Materials & Resources',
    description: 'Access to reference materials and documentation',
    category: 'training',
    requirements: [
      {
        id: 'req-19',
        title: 'Documentation Repository',
        description: 'Access to all essential documentation and guides',
        duration: 'Self-paced',
        responsible: 'Knowledge Management',
        checklist: [
          'Employee handbook',
          'Department procedures',
          'Process documentation',
          'Policy documents',
          'Organizational charts',
          'Contact directories'
        ]
      },
      {
        id: 'req-20',
        title: 'Training Materials',
        description: 'Online learning resources and materials',
        duration: 'Self-paced',
        responsible: 'L&D Team',
        checklist: [
          'Video tutorials',
          'User guides and manuals',
          'Best practices documentation',
          'Templates and forms',
          'FAQ documents',
          'Learning management system access'
        ]
      },
      {
        id: 'req-21',
        title: 'Reference Resources',
        description: 'Ongoing reference materials for continuous learning',
        duration: 'Ongoing',
        responsible: 'Department Leads',
        checklist: [
          'Industry resources',
          'Technical documentation',
          'Product information',
          'Client resources',
          'Compliance materials',
          'Innovation and updates feed'
        ]
      }
    ]
  },
  {
    id: 'mock-testing',
    title: 'Mock Testing & Assessment',
    description: 'Practical tests to validate readiness for role',
    category: 'assessment',
    requirements: [
      {
        id: 'req-22',
        title: 'System Proficiency Test',
        description: 'Test knowledge of core systems and tools',
        duration: '1 hour',
        responsible: 'Training Coordinator',
        checklist: [
          'Navigation test',
          'Basic operations assessment',
          'Process flow validation',
          'Troubleshooting scenarios',
          'Competency verification'
        ]
      },
      {
        id: 'req-23',
        title: 'Role Simulation',
        description: 'Simulated work scenarios for hands-on practice',
        duration: '2 hours',
        responsible: 'Department Manager',
        checklist: [
          'Realistic work scenarios',
          'Problem-solving exercises',
          'Decision-making simulations',
          'Customer interaction roleplay',
          'Team collaboration scenarios'
        ]
      },
      {
        id: 'req-24',
        title: 'Feedback & Readiness Review',
        description: 'Comprehensive feedback and go-live readiness assessment',
        duration: '45 minutes',
        responsible: 'Manager & HR',
        checklist: [
          'Performance feedback',
          'Skill gap identification',
          'Additional training needs',
          'Go-live approval',
          'First week goals setting',
          '30-60-90 day plan review'
        ]
      }
    ]
  }
];

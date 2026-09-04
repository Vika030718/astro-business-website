export const siteContent = {
  en: {
    navigation: {
      labels: {
        home: "Home",

        servicesOverview: "Services",
        managedIt: "Managed IT Services",
        cybersecurity: "Cybersecurity Services",
        cloudMicrosoft365: "Cloud & Microsoft 365",
        backupDisasterRecovery: "Backup & Disaster Recovery",
        networkInfrastructure: "Network & Infrastructure",
        coManagedIt: "Co-Managed IT & Consulting",

        industries: "Industries",
        serviceAreas: "Service Areas",

        about: "About",
        blog: "Blog",
        contact: "Contact",
        faq: "FAQ",
      },
    },

    header: {
      logo: "BusinessCompany Solutions",
      primaryButton: "Book an IT Assessment",
    },

    footer: {
      description:
        "Reliable IT support and cybersecurity for businesses that can’t afford downtime.",

      services: {
        title: "Services",
        items: [
          {
            label: "Managed IT Services",
            routeKey: "managedIt",
          },
          {
            label: "Cybersecurity Services",
            routeKey: "cybersecurity",
          },
          {
            label: "Cloud & Microsoft 365",
            routeKey: "cloudMicrosoft365",
          },
          {
            label: "Backup & Disaster Recovery",
            routeKey: "backupDisasterRecovery",
          },
          {
            label: "Network & Infrastructure",
            routeKey: "networkInfrastructure",
          },
          {
            label: "Co-Managed IT & Consulting",
            routeKey: "coManagedIt",
          },
        ],
      },

      quickLinks: {
        title: "Quick Links",
        items: [
          {
            label: "Home",
            routeKey: "home",
          },
          {
            label: "About",
            routeKey: "about",
          },
          {
            label: "FAQ",
            routeKey: "faq",
          },
          {
            label: "Contact",
            routeKey: "contact",
          },
        ],
      },

      serviceAreas: {
        title: "Service Areas",
        items: ["Cambridge", "Kitchener-Waterloo", "Guelph", "GTA", "Ontario"],
      },

      contact: {
        title: "Contact",
        phone: "111-111-1111",
        phoneHref: "5192676767",
        hours: "Mon-Fri, 8:00 AM - 5:00 PM",
        afterHoursPhone: "222-222-2222",
        afterHoursHref: "5192129788",
        afterHoursLabel: "After-hours 24/7 support",
        email: "hello@BusinessCompany.ca",
        address: "Company Address, Cambridge, ON N3H 4R7",
      },

      social: {
        title: "Follow Us",
      },

      logo: "BusinessCompany Solutions",

      bottom: {
        canadian: "Proudly Canadian. Supporting Ontario businesses.",
        copyright: "© 2025 BusinessCompany Inc. All rights reserved.",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
      },
    },

    contactModal: {
      eyebrow: "CONTACT BusinessCompany",
      title: "Tell us what you need help with",
      text: "Share a few details about your business IT environment and our team will follow up.",
      closeLabel: "Close contact form",
    },

    contactForm: {
      honeypotLabel: "Don’t fill this out if you’re human:",

      fields: {
        name: {
          label: "Name",
          placeholder: "Your name",
        },
        company: {
          label: "Company",
          placeholder: "Company name",
        },
        email: {
          label: "Email",
          placeholder: "you@company.com",
        },
        phone: {
          label: "Phone",
          placeholder: "519-123-4567",
        },
        service: {
          label: "What do you need help with?",
          placeholder: "Select a service",
          options: [
            "Managed IT Services",
            "Cybersecurity",
            "Microsoft 365 / Cloud",
            "Backup / Disaster Recovery",
            "Network / Infrastructure",
            "Co-managed IT / Consulting",
            "Other",
          ],
        },
        message: {
          label: "Message",
          placeholder:
            "Tell us what is in place, what is not working, or what you need help with.",
        },
      },

      submit: "Send message",
      urgentNote: "For urgent after-hours support, call 222-222-2222.",
    },

    sections: {
      contactCta: {
        title: "Ready to Strengthen Your IT?",
        text: "Let’s build a smarter, more secure IT environment together.",
        faq: "Have questions?",
        faqButtonText: "View our FAQs →",
        emailLabel: "Email Us",
        email: "hello@BusinessCompany.ca",
        phone: "111-111-1111",
        phoneHref: "5192676767",
      },
    },

    homePage: {
      seo: {
        title: "Managed IT Services & Business IT Support in Ontario",
        description:
          "Reliable IT support, cybersecurity, Microsoft 365, backup, and network services for businesses across Ontario.",
      },

      hero: {
        eyebrow: "IT Support That Keeps You Moving",
        title: "Managed IT Services & Business IT Support in Ontario",
        text: "BusinessCompany delivers proactive managed IT services, cybersecurity, Microsoft 365 management, cloud solutions, backup, networking, and responsive business IT support for organizations across Ontario. We help reduce downtime, strengthen security, and keep your technology running reliably as your business grows.",
        primaryButton: "Book an IT Assessment",
        secondaryButton: "Explore Services",
        imageAlt: "Abstract secure IT infrastructure visualization",
        expertImageAlt: "BusinessCompany IT support expert",
        expertTextTop: "Talk to an",
        expertTextBottom: "IT expert",
      },

      trustBar: [
        "25+ Years Supporting Businesse",
        "24/7 Monitoring & Support",
        "Senior-Led Team",
        "Guaranteed SLAs",
      ],

      services: {
        eyebrow: "What We Do",
        title: "Complete IT Solutions for Your Business",
        text: "Managed IT services give your business access to proactive technology support without the cost of maintaining a large internal IT department. At BusinessCompany, we combine responsive help desk support, cybersecurity, Microsoft 365 management, cloud solutions, backup, networking, and long-term IT planning into one fully managed service. Whether you need a complete outsourced IT department or additional support for your internal team, we help reduce downtime, strengthen security, and keep your business moving forward.",
        allServicesLabel: "Explore All Services",
        allServicesHref: "/comprehensive-it-support-services/",

        items: [
          {
            title: "Managed IT Services",
            text: "Proactive support, helpdesk, monitoring, and IT management.",
            linkLabel: "Learn more",
            href: "/managed-it-services/",
          },
          {
            title: "Cybersecurity",
            text: "Protect your business from threats and stay compliant.",
            linkLabel: "Learn more",
            href: "/cybersecurity-services/",
          },
          {
            title: "Microsoft 365 & Cloud",
            text: "Cloud solutions, migration, and ongoing management.",
            linkLabel: "Learn more",
            href: "/cloud-microsoft-365/",
          },
          {
            title: "Backup & Recovery",
            text: "Secure backups and fast recovery when it matters most.",
            linkLabel: "Learn more",
            href: "/backup-disaster-recovery/",
          },
          {
            title: "Network & Infrastructure",
            text: "Reliable, secure, and scalable infrastructure solutions.",
            linkLabel: "Learn more",
            href: "/network-infrastructure/",
          },
          {
            title: "Co-Managed IT",
            text: "Extend your team with expert IT support and guidance.",
            linkLabel: "Learn more",
            href: "/co-managed-it-consulting/",
          },
        ],
      },

      whoWeHelp: {
        eyebrow: "Who We Help",
        title: "IT Support Built Around How Your Business Works",
        text: "BusinessCompany supports growing businesses, compliance-focused organizations, and internal IT teams that need reliable, secure, and practical IT support.",
        subtitle: "What our support helps you achieve",
        description:
          "✓ Reduce downtime ✓ Strengthen cybersecurity ✓ Improve productivity ✓ Predictable IT costs ✓ Support business growth",
        buttonLabel: "Talk to an IT Expert",
        buttonHref: "/contact-us/",

        items: [
          {
            icon: "growth",
            title: "Growing Businesses",
            text: "For companies that need reliable IT support, secure systems, Microsoft 365 management, backups, and a clear technology plan as they scale.",
            features: [
              "Fast staff support",
              "Secure email & files",
              "Backups & devices",
            ],
          },
          {
            icon: "shield",
            title: "Compliance-Focused Organizations",
            text: "For businesses that need stronger cybersecurity, data protection, backup strategy, MFA, firewall security, and support with cyber insurance or compliance requirements.",
            features: ["Cyber controls", "Backup confidence", "MFA monitoring"],
          },
          {
            icon: "team",
            title: "Internal IT Teams",
            text: "For organizations with an internal IT person or team that needs extra support, project help, infrastructure expertise, cybersecurity guidance, or overflow helpdesk coverage.",
            features: [
              "Project support",
              "Escalation help",
              "Busy-period coverage",
            ],
          },
        ],
      },

      aboutPreview: {
        eyebrow: "About BusinessCompany",
        title: "Built on trust. Senior-led. Client-focused.",
        text: "BusinessCompany is an Ontario-based managed IT provider with more than 24 years of experience helping businesses improve reliability, strengthen cybersecurity, and make practical technology decisions. Our clients work directly with experienced IT professionals who understand their environment and provide clear, responsive support tailored to the way their business operates.",
        linkLabel: "Learn more about us",
        linkHref: "/about/",
        imageAlt: "BusinessCompany team discussing managed IT support in an office",

        badges: [
          { icon: "location", label: "Ontario-based" },
          { icon: "team", label: "Senior-led expertise" },
          { icon: "headset", label: "Responsive support" },
        ],

        floatingBadges: [
          { icon: "team", label: "Business-Focused Support" },
          { icon: "shield", label: "Trusted IT Partner" },
        ],
      },

      certifications: {
        eyebrow: "Certifications",
        title: "Certifications & Expertise",
        text: "Backed by recognized certifications and real-world experience across networking, cybersecurity, cloud platforms, and business infrastructure. Our team works with technologies including Microsoft 365, Azure, Entra ID, SharePoint, Teams, Exchange, Windows Server, Fortinet and Cisco to support secure, reliable, and well-managed IT environments. We also help businesses strengthen business continuity through disaster recovery planning, cloud backup, infrastructure protection, and practical security controls designed around their operations.",

        items: [
          {
            imageKey: "ccna",
            title: "CCNA",
            text: "Cisco Certified Network Associate",
            imageAlt: "Cisco Certified CCNA certification logo",
          },
          {
            imageKey: "pmp",
            title: "PMP",
            text: "Project Management Professional",
            imageAlt: "Project Management Professional certification logo",
          },
          {
            imageKey: "comptia",
            title: "CompTIA A+",
            text: "IT Technician Certification",
            imageAlt: "CompTIA A Plus certification logo",
          },
          {
            imageKey: "ceh",
            title: "CEH",
            text: "Certified Ethical Hacker",
            imageAlt: "Certified Ethical Hacker certification logo",
          },
          {
            imageKey: "cissp",
            title: "CISSP",
            text: "Certified Information Systems Security Professional",
            imageAlt: "CISSP certification logo",
          },
        ],
      },

      technologyExpertise: {
        eyebrow: "Technology Expertise",
        title: "Supporting the Technology Your Business Relies On",
        text: "Our team supports modern cloud platforms, business applications, networks, security systems, and on-premises infrastructure. From Microsoft 365 and Azure to Fortinet firewalls, Cisco networks, Windows Server, and secure cloud backup, we help businesses build reliable and well-managed IT environments.",
        secondaryText:
          "We also support business continuity, disaster recovery, identity management, collaboration platforms, and the systems your employees rely on every day.",
        technologies: [
          "Microsoft 365",
          "Azure",
          "Entra ID",
          "SharePoint",
          "Microsoft Teams",
          "Exchange",
          "Windows Server",
          "Next Generation Firewalls",
          "Cisco",
          "Cloud Backup",
          "Disaster Recovery",
        ],
      },

      testimonials: {
        eyebrow: "Client Feedback",
        title: "Trusted by Local Businesses",
        text: "Businesses across Ontario rely on BusinessCompany for responsive support, clear communication, and practical IT guidance. Our clients value having an experienced technology partner who understands their environment, responds quickly, and helps keep their systems secure, reliable, and productive. From day-to-day support to long-term technology planning, we focus on building lasting relationships and delivering IT services businesses can depend on.",

        items: [
          {
            quote:
              "The team was professional, responsive, and easy to work with from start to finish. They explained everything clearly and delivered exactly what we needed.",
            rating: 5,
            author: "Kelly, Operations Manager",
            company: "Northfield Manufacturing",
            companyMark: "N",
            industry: "Manufacturing",
          },
          {
            quote:
              "The team was professional, responsive, and easy to work with from start to finish. They explained everything clearly and delivered exactly what we needed.",
            rating: 5,
            author: "Stephen Brooks, Owner",
            company: "Summit Professional Group",
            companyMark: "S",
            industry: "Professional Services",
          },
          {
            quote:
              "The team was professional, responsive, and easy to work with from start to finish. They explained everything clearly and delivered exactly what we needed.",
            rating: 5,
            author: "General Manager",
            company: "Arrow Fire",
            companyMark: "M",
            industry: "Logistics",
          },
        ],
      },

      locations: {
        eyebrow: "Where We Support",
        title: "Local Presence. Wider Reach.",
        text: "Headquartered in Southwestern Ontario, BusinessCompany delivers reliable IT support to businesses across Ontario and beyond.",
        linkLabel: "Talk to our team",
        linkHref: "/contact-us/",
        mapAlt:
          "Map of Canada showing BusinessCompany service areas across Ontario and beyond",

        areas: [
          "Cambridge",
          "Kitchener-Waterloo",
          "Guelph",
          "GTA",
          "Ontario",
          "Quebec",
          "Manitoba",
        ],

        features: [
          {
            icon: "ontario",
            title: "Ontario-based",
            text: "Proudly headquartered in Southwestern Ontario",
          },
          {
            icon: "remote",
            title: "Remote + On-site",
            text: "Flexible support where you need it",
          },
          {
            icon: "building",
            title: "Multi-location support",
            text: "We scale with your business",
          },
        ],

        mapLabels: [
          { text: "Manitoba", x: "16%", y: "39%" },
          { text: "Quebec", x: "86%", y: "35%" },
          { text: "Kitchener-Waterloo Cambridge", x: "54%", y: "70%" },
          { text: "GTA", x: "78%", y: "72%" },
        ],

        supportCard: {
          title: "Supporting businesses across Ontario and beyond.",
          text: "From local partnerships to nationwide coverage.",
        },
      },
    },

    servicesOverviewPage: {
      seo: {
        title: "Comprehensive IT Support Services for Businesses",
        description:
          "Explore BusinessCompany's business IT services, including managed IT, cybersecurity, Microsoft 365, cloud, backup, disaster recovery, and infrastructure support.",
      },

      hero: {
        eyebrow: "IT SERVICES",
        title: "Business IT services that work together",
        text: "BusinessCompany helps businesses manage the core parts of their IT environment — support, security, Microsoft 365, backups, networks, infrastructure, and project work.",
      },

      intro: {
        eyebrow: "Stronger together",
        title: "One team for the pieces that keep your business running",
        text: "Most IT issues do not happen in isolation. Email, devices, networks, security, backups, Microsoft 365, and vendors all affect each other. BusinessCompany helps manage the full environment so problems can be handled with the right context instead of treating each system separately. That means fewer handoffs between providers, clearer ownership when something goes wrong, and better decisions about what should be fixed, upgraded, secured, or planned next.",
      },
      servicesEyebrow: {
        eyebrow: "Our Services",
      },

      services: [
        {
          title: "Managed IT Services",
          text: "Day-to-day IT support, monitoring, maintenance, and user assistance for your business technology. We help keep devices, systems, and users productive while reducing recurring IT issues and unexpected downtime.",
          href: "/managed-it-services/",
        },
        {
          title: "Cybersecurity Services",
          text: "Practical cybersecurity services for users, devices, email, Microsoft 365, firewalls, and access controls. We help businesses reduce security risks, strengthen protection, and respond more effectively when threats occur.",
          href: "/cybersecurity-services/",
        },
        {
          title: "Cloud & Microsoft 365",
          text: "Microsoft 365 setup, support, migrations, account management, permissions, and security configuration. We help businesses get more from Microsoft 365 while keeping users, data, and access properly managed.",
          href: "/cloud-microsoft-365/",
        },
        {
          title: "Backup & Disaster Recovery",
          text: "Backup planning, monitoring, recovery support, and disaster recovery guidance for business systems and cloud data.",
          href: "/backup-disaster-recovery/",
        },
        {
          title: "Network & Infrastructure",
          text: "Firewall, switching, wireless, VPN, server, storage, and infrastructure support for business environments.",
          href: "/network-infrastructure/",
        },
        {
          title: "Co-Managed IT & Consulting",
          text: "Support for internal IT teams, project planning, escalations, vendor coordination, and senior technical guidance.",
          href: "/co-managed-it-consulting/",
        },
      ],

      cta: {
        eyebrow: "NOT SURE WHERE TO START?",
        title: "Tell us what is in place and what needs to improve.",
        text: "BusinessCompany can help review your current environment and recommend what should be fixed now, planned next, or left for later.",
        button: "Contact BusinessCompany",
      },
    },

    services: {
      managedItServicesPage: {
        seo: {
          title: "Managed IT Services in Cambridge & Ontario",
          description:
            "Reliable managed IT services for businesses in Cambridge, Kitchener-Waterloo, Guelph, the GTA, and across Ontario.",
        },

        hero: {
          eyebrow: "Managed IT Services",
          title: "Managed IT services that keep your business running",
          text: "Reliable day-to-day IT support, monitoring, maintenance, and security for businesses that need their technology to work without constant interruptions.",
          button: {
            label: "Contact us",
            href: "/contact-us/",
          },
          badges: {
            top: {
              value: "24/7",
              label: "Monitoring",
            },
            bottom: {
              value: "Senior-Led",
              label: "Support",
            },
          },
        },

        support: {
          title: "Questions?",
          text: "We’re here 24/7.",
          phone: "222-222-2222",
          phoneHref: "5192129788",
          note: "After-hours support",
        },

        navItems: [
          { label: "Overview", href: "#overview" },
          { label: "Who It’s For", href: "#who-its-for" },
          { label: "What’s Included", href: "#included" },
          { label: "How It Works", href: "#how-it-works" },
          { label: "Managed vs Reactive IT", href: "#comparison" },
          { label: "Related Services", href: "#related-services" },
          { label: "Service Areas", href: "#service-areas" },
        ],
        overview: {
          eyebrow: "Overview",
          title: "Reliable IT support for day-to-day business operations",
          paragraphs: [
            "BusinessCompany Solutions Inc. provides ongoing support, monitoring, maintenance, and coordination to keep your systems secure, reliable, and performing at their best.",
            "We act as an extension of your team — managing the day-to-day so you can stay focused on running and growing your business.",
            "Instead of waiting for users to report problems, managed IT gives your business ongoing visibility into devices, systems, updates, security, backups, and recurring issues. Our team works proactively to identify problems earlier and keep the environment documented, maintained, and easier to support.",
          ],
          highlights: [
            {
              icon: "shield",
              title: "25+ years of IT service delivery",
              text: "Decades of experience supporting businesses across Ontario and beyond.",
            },
            {
              icon: "clock",
              title: "24/7 support availability",
              text: "We’re here when you need us — day, night, and weekends.",
            },
            {
              icon: "location",
              title: "Local team. Broad reach.",
              text: "Based in Cambridge, Ontario, supporting businesses across the province and beyond.",
            },
          ],
        },
        whoItsFor: {
          eyebrow: "Who It’s For",
          title: "Is Managed IT right for your business?",
          text: "Managed IT Services are a good fit for businesses that want fewer interruptions, better visibility into their technology, and a team responsible for keeping the day-to-day IT environment running reliably.",

          items: [
            {
              title: "Growing businesses",
              text: "As your team, devices, locations, and systems grow, IT becomes more difficult to manage. We help keep the environment organized, reliable, and ready to support continued growth.",
            },
            {
              title: "Businesses without dedicated internal IT",
              text: "Get ongoing technical support and IT management without having to build and maintain a complete internal IT department.",
            },
            {
              title: "Teams dealing with recurring IT problems",
              text: "Move beyond repeatedly fixing the same issues with proactive monitoring, documentation, maintenance, and long-term improvements.",
            },
            {
              title: "Businesses working with multiple technology vendors",
              text: "Have one IT partner help coordinate internet providers, software vendors, Microsoft 365, hardware, and other technology relationships.",
            },
          ],
        },
        included: {
          eyebrow: "What’s Included",
          title: "Everything your business needs to stay productive",
          items: [
            "24/7 monitoring",
            "Helpdesk support",
            "Remote and on-site support",
            "Patch and update management",
            "Server and workstation management",
            "IT documentation",
            "Vendor coordination",
            "Proactive maintenance",
            "Security and backup monitoring",
            "Technology planning and reporting",
          ],
        },
        process: {
          eyebrow: "How It Works",
          title: "A clear process for keeping your IT running smoothly",
          steps: [
            {
              number: "01",
              title: "Assess",
              text: "We review your environment, users, systems, vendors, and business priorities.",
              icon: "search",
            },
            {
              number: "02",
              title: "Document",
              text: "We organize key information so your IT environment is easier to support and manage.",
              icon: "document",
            },
            {
              number: "03",
              title: "Monitor & Support",
              text: "We provide ongoing monitoring, maintenance, helpdesk support, and issue resolution.",
              icon: "monitor",
            },
            {
              number: "04",
              title: "Improve",
              text: "We help strengthen your systems over time with practical recommendations and planning.",
              icon: "growth",
            },
          ],
        },
        comparison: {
          eyebrow: "A Smarter Support Model",
          title: "Managed IT Services vs. Reactive IT Support",
          text: "Reactive support waits for problems to happen. Managed IT Services focus on prevention, visibility, and ongoing accountability so your business can stay productive with fewer interruptions.",
          columns: {
            managed: "Managed IT Services",
            reactive: "Reactive IT Support",
          },
          rows: [
            {
              label: "Approach",
              managed: "Proactive monitoring to prevent issues",
              reactive: "Break-fix response after problems occur",
            },
            {
              label: "Cost",
              managed: "Predictable support and budgeting",
              reactive: "Ad hoc fixes with unpredictable costs",
            },
            {
              label: "Visibility",
              managed: "Ongoing documentation and visibility",
              reactive: "Limited visibility and inconsistent records",
            },
            {
              label: "Accountability",
              managed: "One accountable team",
              reactive: "Multiple vendors and unresolved issues",
            },
            {
              label: "Result",
              managed: "Fewer disruptions, better performance",
              reactive: "More downtime, more stress",
            },
          ],
        },
        connectedServices: {
          eyebrow: "Related IT Services",
          title: "Managed IT that connects with the rest of your technology",
          text: "Managed IT Services often include coordination across cybersecurity, Microsoft 365, backups, networking, and infrastructure. For businesses that need deeper support in these areas, BusinessCompany provides dedicated service options.",
          ariaLabel: "Related IT services",
          services: [
            {
              title: "Cybersecurity Services",
              href: "/cybersecurity-services/",
            },
            {
              title: "Cloud & Microsoft 365",
              href: "/cloud-microsoft-365/",
            },
            {
              title: "Backup & Disaster Recovery",
              href: "/backup-disaster-recovery/",
            },
            {
              title: "Co-Managed IT & Consulting",
              href: "/co-managed-it-consulting/",
            },
          ],
        },
        areas: {
          eyebrow: "Where We Support",
          title: "Managed IT support across Ontario",
          text: "Based in Cambridge, Ontario, BusinessCompany supports businesses across Cambridge, Kitchener, Waterloo, Guelph, the GTA, and wider Ontario. For larger deployments, the team can travel on-site from Manitoba to Quebec, with ongoing support handled remotely after setup.",
          items: [
            {
              title: "Cambridge, Kitchener, Waterloo, and Guelph",
              text: "Local IT support from a team that knows the region.",
              icon: "pin",
            },
            {
              title: "GTA and businesses across Ontario",
              text: "On-site and remote support across the province.",
              icon: "building",
            },
            {
              title: "Deployments from Manitoba to Quebec",
              text: "Physical installation and setup where needed, followed by ongoing remote support.",
              icon: "globe",
            },
          ],
        },
        faq: {
          eyebrow: "Frequently Asked Questions",
          title: "Managed IT Services FAQs",

          items: [
            {
              question: "What are managed IT services?",
              answer:
                "Managed IT Services provide ongoing monitoring, maintenance, technical support, and management of your business technology instead of waiting for problems to occur.",
            },
            {
              question: "What is included in managed IT support?",
              answer:
                "Services can include helpdesk support, monitoring, patch management, workstation and server management, documentation, vendor coordination, security and backup monitoring, and ongoing technology planning.",
            },
          ],
        },
      },
      cybersecurityServicesPage: {
        seo: {
          title: "Cybersecurity Services for Ontario Businesses",
          description:
            "Protect your business with cybersecurity services including endpoint protection, Microsoft 365 security, monitoring, email security, and risk reduction.",
        },
        hero: {
          eyebrow: "Cybersecurity Services",
          title: "Cybersecurity services that protect your business",
          text: "Practical cybersecurity services for businesses that need stronger protection across users, devices, networks, Microsoft 365, and daily operations.",
          button: {
            label: "Contact us",
            href: "/contact-us/",
          },
          badges: {
            top: {
              value: "24/7",
              label: "Monitoring",
            },
            bottom: {
              value: "Business",
              label: "Protection",
            },
          },
        },

        navItems: [
          { label: "Overview", href: "#overview" },
          { label: "What’s Included", href: "#included" },
          { label: "How It Works", href: "#how-it-works" },
          { label: "Related Services", href: "#related-services" },
          { label: "Service Areas", href: "#service-areas" },
        ],

        support: {
          title: "Security concerns?",
          text: "We’re here 24/7.",
          phone: "222-222-2222",
          phoneHref: "5192129788",
          note: "After-hours support",
        },

        overview: {
          eyebrow: "Overview",
          title: "Business cybersecurity support built around real-world risks",
          paragraphs: [
            "BusinessCompany Solutions Inc. helps businesses strengthen their cybersecurity with practical protection across devices, users, cloud systems, networks, and business-critical data.",
            "Our approach focuses on prevention, visibility, and fast response — helping reduce risk without making security feel complicated for your team.",
          ],
          highlights: [
            {
              icon: "shield",
              title: "Layered business protection",
              text: "Security support across endpoints, networks, Microsoft 365, backups, and user access.",
            },
            {
              icon: "clock",
              title: "24/7 monitoring availability",
              text: "Ongoing visibility helps identify suspicious activity before it becomes a larger issue.",
            },
            {
              icon: "location",
              title: "Local Ontario team. Broader reach.",
              text: "Based in Cambridge, supporting businesses across Ontario and beyond.",
            },
          ],
        },

        included: {
          eyebrow: "What’s Included",
          title:
            "Cybersecurity services that strengthen your business environment",
          items: [
            "Endpoint security and monitoring",
            "Microsoft 365 security support",
            "Firewall and network security",
            "User access and MFA guidance",
            "Security policy recommendations",
            "Threat monitoring and alert review",
            "Patch and vulnerability coordination",
            "Backup and recovery security checks",
            "Incident response support",
            "Security awareness guidance",
          ],
        },

        process: {
          eyebrow: "How It Works",
          title: "A practical process for reducing cybersecurity risk",
          steps: [
            {
              number: "01",
              title: "Review",
              text: "We review your current security posture, systems, users, access, and risk areas.",
              icon: "search",
            },
            {
              number: "02",
              title: "Prioritize",
              text: "We identify the most important risks and recommend practical steps to reduce exposure.",
              icon: "document",
            },
            {
              number: "03",
              title: "Protect & Monitor",
              text: "We help implement security controls, monitor alerts, and support day-to-day protection.",
              icon: "monitor",
            },
            {
              number: "04",
              title: "Improve",
              text: "We continue strengthening your environment as threats, tools, and business needs change.",
              icon: "growth",
            },
          ],
        },

        caseStudyPromo: {
          eyebrow: "Related Case Study",
          title:
            "How BusinessCompany helped North Bay Manufacturing stay secure and insured",
          text: "See how a focused IT security and compliance project helped strengthen protection, support insurance requirements, and reduce operational disruption.",
          tags: [
            "Insurance readiness",
            "Security assessment",
            "Minimal downtime",
          ],
          buttonLabel: "Read the Case Study",
          buttonHref: "/it-security-compliance-case-study/",
        },

        connectedServices: {
          eyebrow: "Related IT Services",
          title: "Cybersecurity that connects with the rest of your IT",
          text: "Strong cybersecurity depends on more than one tool. It connects with managed IT, Microsoft 365, backups, network infrastructure, and long-term IT planning.",
          ariaLabel: "Related IT services",
          services: [
            {
              title: "Managed IT Services",
              href: "/managed-it-services/",
            },
            {
              title: "Cloud & Microsoft 365",
              href: "/cloud-microsoft-365/",
            },
            {
              title: "Backup & Disaster Recovery",
              href: "/backup-disaster-recovery/",
            },
          ],
        },

        areas: {
          eyebrow: "Where We Support",
          title: "Cybersecurity support across Ontario",
          text: "Based in Cambridge, Ontario, BusinessCompany supports businesses across Cambridge, Kitchener, Waterloo, Guelph, the GTA, and wider Ontario. For larger deployments, the team can travel on-site from Manitoba to Quebec, with ongoing support handled remotely after setup.",
          items: [
            {
              title: "Cambridge, Kitchener, Waterloo, and Guelph",
              text: "Local cybersecurity and IT support from a team that understands the region.",
              icon: "pin",
            },
            {
              title: "GTA and businesses across Ontario",
              text: "Security support for business users, networks, cloud systems, and infrastructure.",
              icon: "building",
            },
            {
              title: "Deployments from Manitoba to Quebec",
              text: "Physical installation and setup where needed, followed by ongoing remote support.",
              icon: "globe",
            },
          ],
        },
      },
      cloudMicrosoft365Page: {
        seo: {
          title: "Cloud & Microsoft 365 Services for Businesses",
          description:
            "Microsoft 365, cloud support, user management, migrations, security improvements, and practical cloud consulting for businesses in Ontario.",
        },
        hero: {
          eyebrow: "Cloud & Microsoft 365",
          title: "Microsoft 365 support and cloud services for your business",
          text: "Secure, reliable cloud and Microsoft 365 support for business email, Teams, SharePoint, users, devices, licensing, and day-to-day productivity.",
          button: {
            label: "Contact us",
            href: "/contact-us/",
          },
          badges: {
            top: {
              value: "M365",
              label: "Support",
            },
            bottom: {
              value: "Cloud",
              label: "Ready",
            },
          },
        },

        navItems: [
          { label: "Overview", href: "#overview" },
          { label: "What’s Included", href: "#included" },
          { label: "How It Works", href: "#how-it-works" },
          { label: "Related Services", href: "#related-services" },
          { label: "Service Areas", href: "#service-areas" },
        ],

        support: {
          title: "Need cloud support?",
          text: "We’re here 24/7.",
          phone: "222-222-2222",
          phoneHref: "5192129788",
          note: "After-hours support",
        },

        overview: {
          eyebrow: "Overview",
          title:
            "Cloud and Microsoft 365 support built for business productivity",
          paragraphs: [
            "BusinessCompany Solutions Inc. helps businesses manage Microsoft 365, cloud services, email, collaboration tools, user access, and cloud security so teams can work more reliably from anywhere.",
            "From Microsoft 365 setup and migration to ongoing support and administration, we help keep your cloud environment organized, secure, and aligned with how your business operates.",
          ],
          highlights: [
            {
              icon: "shield",
              title: "Secure Microsoft 365 environments",
              text: "Support for access control, MFA, email security, user permissions, and cloud configuration.",
            },
            {
              icon: "clock",
              title: "Ongoing support and administration",
              text: "Help with daily Microsoft 365 issues, user changes, licensing, and cloud service management.",
            },
            {
              icon: "location",
              title: "Local team. Remote-ready support.",
              text: "Based in Cambridge, Ontario, supporting cloud environments for businesses across Ontario and beyond.",
            },
          ],
        },

        included: {
          eyebrow: "What’s Included",
          title:
            "Microsoft 365 and cloud services that support daily business operations",
          items: [
            "Microsoft 365 setup and administration",
            "Business email and Exchange Online support",
            "Teams, SharePoint, and OneDrive support",
            "User onboarding and offboarding",
            "Microsoft 365 licensing guidance",
            "Cloud migration support",
            "MFA and access security",
            "Email security and spam protection",
            "Device and account coordination",
            "Ongoing cloud support and troubleshooting",
          ],
        },

        process: {
          eyebrow: "How It Works",
          title: "A clear process for managing your cloud environment",
          steps: [
            {
              number: "01",
              title: "Review",
              text: "We review your Microsoft 365 tenant, users, licensing, email, security settings, and cloud tools.",
              icon: "search",
            },
            {
              number: "02",
              title: "Plan",
              text: "We identify what needs to be cleaned up, secured, migrated, or better organized.",
              icon: "document",
            },
            {
              number: "03",
              title: "Support & Manage",
              text: "We provide ongoing support for users, email, Teams, SharePoint, OneDrive, and cloud administration.",
              icon: "monitor",
            },
            {
              number: "04",
              title: "Improve",
              text: "We help optimize licensing, security, collaboration, and cloud workflows as your business grows.",
              icon: "growth",
            },
          ],
        },

        connectedServices: {
          eyebrow: "Related IT Services",
          title: "Cloud support that connects with the rest of your IT",
          text: "Microsoft 365 and cloud services work best when they are supported alongside cybersecurity, managed IT, backups, networking, and long-term technology planning.",
          ariaLabel: "Related IT services",
          services: [
            {
              title: "Managed IT Services",
              href: "/managed-it-services/",
            },
            {
              title: "Cybersecurity Services",
              href: "/cybersecurity-services/",
            },
            {
              title: "Backup & Disaster Recovery",
              href: "/backup-disaster-recovery/",
            },
          ],
        },

        areas: {
          eyebrow: "Where We Support",
          title: "Microsoft 365 support across Ontario",
          text: "Based in Cambridge, Ontario, BusinessCompany supports businesses across Cambridge, Kitchener, Waterloo, Guelph, the GTA, and wider Ontario. For larger deployments, the team can travel on-site from Manitoba to Quebec, with ongoing support handled remotely after setup.",
          items: [
            {
              title: "Cambridge, Kitchener, Waterloo, and Guelph",
              text: "Local Microsoft 365 and cloud support from a team that knows the region.",
              icon: "pin",
            },
            {
              title: "GTA and businesses across Ontario",
              text: "Cloud support for business email, collaboration, users, devices, and access.",
              icon: "building",
            },
            {
              title: "Deployments from Manitoba to Quebec",
              text: "Physical installation and setup where needed, followed by ongoing remote support.",
              icon: "globe",
            },
          ],
        },
      },
      backupDisasterRecoveryPage: {
        seo: {
          title: "Backup & Disaster Recovery Services",
          description:
            "Protect business data with backup, disaster recovery planning, Microsoft 365 backup, server backup, recovery testing, and business continuity support.",
        },
        hero: {
          eyebrow: "Backup & Disaster Recovery",
          title:
            "Backup and disaster recovery services for business continuity",
          text: "Reliable data backup, disaster recovery, and business continuity support to help protect your systems, files, servers, and critical business operations.",
          button: {
            label: "Contact us",
            href: "/contact-us/",
          },
          badges: {
            top: {
              value: "Backup",
              label: "Protected",
            },
            bottom: {
              value: "Recovery",
              label: "Ready",
            },
          },
        },

        navItems: [
          { label: "Overview", href: "#overview" },
          { label: "What’s Included", href: "#included" },
          { label: "How It Works", href: "#how-it-works" },
          { label: "Related Services", href: "#related-services" },
          { label: "Service Areas", href: "#service-areas" },
        ],

        support: {
          title: "Backup concerns?",
          text: "We’re here 24/7.",
          phone: "222-222-2222",
          phoneHref: "5192129788",
          note: "After-hours support",
        },

        overview: {
          eyebrow: "Overview",
          title:
            "Business backup and recovery support built for real downtime risks",
          paragraphs: [
            "BusinessCompany Solutions Inc. helps businesses protect important data, servers, cloud systems, and critical applications with practical backup and disaster recovery solutions.",
            "Our goal is not only to back up your data, but to help make sure your business can recover when something goes wrong — from hardware failure and accidental deletion to cyber incidents and major outages.",
          ],
          highlights: [
            {
              icon: "shield",
              title: "Protection for critical business data",
              text: "Backup support for servers, files, cloud systems, Microsoft 365, and business applications.",
            },
            {
              icon: "clock",
              title: "Recovery-focused planning",
              text: "A backup is only useful if it can be restored when your business needs it most.",
            },
            {
              icon: "location",
              title: "Local support. Broader deployment reach.",
              text: "Based in Cambridge, supporting businesses across Ontario and beyond.",
            },
          ],
        },

        included: {
          eyebrow: "What’s Included",
          title:
            "Backup and disaster recovery services that help reduce downtime",
          items: [
            "Business data backup support",
            "Server backup coordination",
            "Cloud backup solutions",
            "Microsoft 365 backup guidance",
            "Disaster recovery planning",
            "Backup monitoring and alert review",
            "Recovery testing coordination",
            "Ransomware recovery readiness",
            "Business continuity support",
            "Backup documentation and reporting",
          ],
        },

        process: {
          eyebrow: "How It Works",
          title:
            "A practical process for protecting and recovering business data",
          steps: [
            {
              number: "01",
              title: "Review",
              text: "We review your systems, data, applications, recovery needs, and current backup coverage.",
              icon: "search",
            },
            {
              number: "02",
              title: "Plan",
              text: "We identify what needs protection and help define practical recovery priorities for your business.",
              icon: "document",
            },
            {
              number: "03",
              title: "Protect & Monitor",
              text: "We help coordinate backup solutions, monitor backup health, and review alerts or failures.",
              icon: "monitor",
            },
            {
              number: "04",
              title: "Recover",
              text: "We support recovery planning and restoration steps so your business can get back online faster.",
              icon: "growth",
            },
          ],
        },

        connectedServices: {
          eyebrow: "Related IT Services",
          title: "Backup and recovery connected to the rest of your IT",
          text: "Strong backup and disaster recovery planning works best when it connects with managed IT, cybersecurity, Microsoft 365, infrastructure, and long-term technology planning.",
          ariaLabel: "Related IT services",
          services: [
            {
              title: "Managed IT Services",
              href: "/managed-it-services/",
            },
            {
              title: "Cybersecurity Services",
              href: "/cybersecurity-services/",
            },
            {
              title: "Cloud & Microsoft 365",
              href: "/cloud-microsoft-365/",
            },
          ],
        },

        areas: {
          eyebrow: "Where We Support",
          title: "Backup and disaster recovery support across Ontario",
          text: "Based in Cambridge, Ontario, BusinessCompany supports businesses across Cambridge, Kitchener, Waterloo, Guelph, the GTA, and wider Ontario. For larger deployments, the team can travel on-site from Manitoba to Quebec, with ongoing support handled remotely after setup.",
          items: [
            {
              title: "Cambridge, Kitchener, Waterloo, and Guelph",
              text: "Local backup and recovery support from a team that knows the region.",
              icon: "pin",
            },
            {
              title: "GTA and businesses across Ontario",
              text: "Backup, recovery, and continuity support for business systems and data.",
              icon: "building",
            },
            {
              title: "Deployments from Manitoba to Quebec",
              text: "Physical installation and setup where needed, followed by ongoing remote support.",
              icon: "globe",
            },
          ],
        },
      },
      networkInfrastructurePage: {
        seo: {
          title: "Network & Infrastructure Services for Businesses",
          description:
            "Business network and infrastructure services including firewalls, switches, Wi-Fi, servers, VPNs, cabling coordination, and infrastructure planning.",
        },
        hero: {
          eyebrow: "Network Infrastructure",
          title:
            "Network infrastructure services for reliable business connectivity",
          text: "Professional network infrastructure support for business firewalls, switches, Wi-Fi, VPNs, cabling, and secure connectivity across your organization.",
          button: {
            label: "Contact us",
            href: "/contact-us/",
          },
          badges: {
            top: {
              value: "Secure",
              label: "Networks",
            },
            bottom: {
              value: "On-Site",
              label: "Deployment",
            },
          },
        },

        navItems: [
          { label: "Overview", href: "#overview" },
          { label: "What’s Included", href: "#included" },
          { label: "How It Works", href: "#how-it-works" },
          { label: "Related Services", href: "#related-services" },
          { label: "Service Areas", href: "#service-areas" },
        ],

        support: {
          title: "Network issue?",
          text: "We’re here 24/7.",
          phone: "222-222-2222",
          phoneHref: "5192129788",
          note: "After-hours support",
        },

        overview: {
          eyebrow: "Overview",
          title: "Business network support for secure, stable connectivity",
          paragraphs: [
            "BusinessCompany Solutions Inc. helps businesses design, install, manage, and support the network infrastructure that keeps users, devices, servers, cloud services, and locations connected.",
            "From firewall and switch configuration to Wi-Fi, VPNs, cabling coordination, and multi-site connectivity, we help build networks that are reliable, secure, and easier to manage.",
          ],
          highlights: [
            {
              icon: "shield",
              title: "Secure network foundations",
              text: "Support for firewalls, VPNs, segmentation, access control, and network security best practices.",
            },
            {
              icon: "clock",
              title: "Reliable business connectivity",
              text: "Network infrastructure planned and supported to reduce downtime, slow connections, and recurring issues.",
            },
            {
              icon: "location",
              title: "On-site and remote support",
              text: "Based in Cambridge, supporting business network deployments across Ontario and beyond.",
            },
          ],
        },

        included: {
          eyebrow: "What’s Included",
          title:
            "Network infrastructure services that keep your business connected",
          items: [
            "Firewall configuration and support",
            "Business Wi-Fi planning and deployment",
            "Switching and VLAN configuration",
            "VPN and remote access support",
            "Network troubleshooting",
            "Multi-site connectivity support",
            "Network documentation",
            "Cabling coordination",
            "Internet and ISP coordination",
            "Ongoing network maintenance",
          ],
        },

        process: {
          eyebrow: "How It Works",
          title:
            "A practical process for building and supporting reliable networks",
          steps: [
            {
              number: "01",
              title: "Assess",
              text: "We review your current network, devices, locations, internet services, security needs, and business requirements.",
              icon: "search",
            },
            {
              number: "02",
              title: "Design",
              text: "We plan the right firewall, switching, Wi-Fi, VPN, and connectivity approach for your environment.",
              icon: "document",
            },
            {
              number: "03",
              title: "Deploy & Support",
              text: "We help install, configure, document, and support the network infrastructure your business depends on.",
              icon: "monitor",
            },
            {
              number: "04",
              title: "Improve",
              text: "We continue to optimize performance, reliability, and security as your business and network grow.",
              icon: "growth",
            },
          ],
        },

        connectedServices: {
          eyebrow: "Related IT Services",
          title: "Network infrastructure connected to the rest of your IT",
          text: "Your network supports nearly everything your business does. It connects with managed IT, cybersecurity, Microsoft 365, backups, remote access, and long-term technology planning.",
          ariaLabel: "Related IT services",
          services: [
            {
              title: "Managed IT Services",
              href: "/managed-it-services/",
            },
            {
              title: "Cybersecurity Services",
              href: "/cybersecurity-services/",
            },
            {
              title: "Co-Managed IT & Consulting",
              href: "/co-managed-it-consulting/",
            },
          ],
        },

        areas: {
          eyebrow: "Where We Support",
          title: "Network infrastructure support across Ontario",
          text: "Based in Cambridge, Ontario, BusinessCompany supports businesses across Cambridge, Kitchener, Waterloo, Guelph, the GTA, and wider Ontario. For larger deployments, the team can travel on-site from Manitoba to Quebec, with ongoing support handled remotely after setup.",
          items: [
            {
              title: "Cambridge, Kitchener, Waterloo, and Guelph",
              text: "Local network infrastructure support from a team that knows the region.",
              icon: "pin",
            },
            {
              title: "GTA and businesses across Ontario",
              text: "On-site and remote support for firewalls, switches, Wi-Fi, VPNs, and connectivity.",
              icon: "building",
            },
            {
              title: "Deployments from Manitoba to Quebec",
              text: "Physical installation and setup where needed, followed by ongoing remote support.",
              icon: "globe",
            },
          ],
        },
      },
      coManagedItConsultingPage: {
        seo: {
          title: "Co-Managed IT & IT Consulting Services",
          description:
            "Co-managed IT and consulting services for businesses that need senior guidance, project support, escalation help, and strategic IT planning.",
        },
        hero: {
          eyebrow: "Co-Managed IT & Consulting",
          title: "Co-managed IT services and consulting for growing businesses",
          text: "Flexible IT support and consulting for businesses that need extra expertise, project support, strategic guidance, or help extending their internal IT team.",
          button: {
            label: "Contact us",
            href: "/contact-us/",
          },
          badges: {
            top: {
              value: "Expert",
              label: "Guidance",
            },
            bottom: {
              value: "Team",
              label: "Extension",
            },
          },
        },

        navItems: [
          { label: "Overview", href: "#overview" },
          { label: "What’s Included", href: "#included" },
          { label: "How It Works", href: "#how-it-works" },
          { label: "Related Services", href: "#related-services" },
          { label: "Service Areas", href: "#service-areas" },
        ],

        support: {
          title: "Need IT guidance?",
          text: "We’re here 24/7.",
          phone: "222-222-2222",
          phoneHref: "5192129788",
          note: "After-hours support",
        },

        overview: {
          eyebrow: "Overview",
          title: "Flexible IT expertise when your business needs more support",
          paragraphs: [
            "BusinessCompany Solutions Inc. provides co-managed IT services and IT consulting for businesses that already have internal IT resources but need additional support, senior expertise, or help with larger projects.",
            "Whether your team needs escalation support, strategic planning, project delivery, infrastructure guidance, or day-to-day backup, we work alongside your existing team without replacing what already works.",
          ],
          highlights: [
            {
              icon: "shield",
              title: "Support for internal IT teams",
              text: "Extra capacity and senior technical guidance when your team needs help handling workload, risk, or complexity.",
            },
            {
              icon: "clock",
              title: "Project and escalation support",
              text: "Help with larger initiatives, technical decisions, urgent issues, and business-critical IT planning.",
            },
            {
              icon: "location",
              title: "Local team. Broader reach.",
              text: "Based in Cambridge, supporting businesses across Ontario and beyond.",
            },
          ],
        },

        included: {
          eyebrow: "What’s Included",
          title:
            "Co-managed IT and consulting services that strengthen your team",
          items: [
            "Support for internal IT teams",
            "IT consulting and strategy",
            "Project planning and delivery",
            "Escalation support",
            "Infrastructure guidance",
            "Microsoft 365 and cloud consulting",
            "Cybersecurity recommendations",
            "Vendor coordination",
            "Documentation and process improvement",
            "Technology roadmap planning",
          ],
        },

        process: {
          eyebrow: "How It Works",
          title: "A practical process for working alongside your team",
          steps: [
            {
              number: "01",
              title: "Understand",
              text: "We learn how your team works, where support is needed, and what business goals need to be protected.",
              icon: "search",
            },
            {
              number: "02",
              title: "Align",
              text: "We define responsibilities, communication, priorities, and the right support model for your business.",
              icon: "document",
            },
            {
              number: "03",
              title: "Support & Advise",
              text: "We provide technical support, consulting, escalation help, and project guidance where needed.",
              icon: "monitor",
            },
            {
              number: "04",
              title: "Improve",
              text: "We help improve systems, documentation, security, planning, and long-term IT direction.",
              icon: "growth",
            },
          ],
        },

        connectedServices: {
          eyebrow: "Related IT Services",
          title: "Consulting that connects with the rest of your IT",
          text: "Co-managed IT and consulting often connect with managed IT services, cybersecurity, Microsoft 365, backups, network infrastructure, and broader technology planning.",
          ariaLabel: "Related IT services",
          services: [
            {
              title: "Managed IT Services",
              href: "/managed-it-services/",
            },
            {
              title: "Cybersecurity Services",
              href: "/cybersecurity-services/",
            },
            {
              title: "Network Infrastructure",
              href: "/network-infrastructure/",
            },
          ],
        },

        areas: {
          eyebrow: "Where We Support",
          title: "Co-managed IT and consulting support across Ontario",
          text: "Based in Cambridge, Ontario, BusinessCompany supports businesses across Cambridge, Kitchener, Waterloo, Guelph, the GTA, and wider Ontario. For larger deployments, the team can travel on-site from Manitoba to Quebec, with ongoing support handled remotely after setup.",
          items: [
            {
              title: "Cambridge, Kitchener, Waterloo, and Guelph",
              text: "Local IT consulting and co-managed support from a team that knows the region.",
              icon: "pin",
            },
            {
              title: "GTA and businesses across Ontario",
              text: "Support for internal IT teams, projects, infrastructure, cloud, security, and planning.",
              icon: "building",
            },
            {
              title: "Deployments from Manitoba to Quebec",
              text: "Physical installation and setup where needed, followed by ongoing remote support.",
              icon: "globe",
            },
          ],
        },
      },
    },

    securityCompliancePage: {
      seo: {
        title: "IT Security & Compliance Services for Businesses",
        description:
          "Support your business with practical IT security and compliance services, including Microsoft 365 security, monitoring, access controls, risk reduction, and policy guidance.",
      },

      hero: {
        eyebrow: "Case Study",
        title: "How we helped North Bay Manufacturing stay secure and insured",
        text: "North Bay Manufacturing needed to strengthen its IT security posture, meet insurance requirements, and keep operations moving without unnecessary downtime. BusinessCompany delivered a focused security and compliance project designed around their business needs.",
        meta: [
          {
            label: "Client",
            value: "North Bay Manufacturing",
          },
          {
            label: "Focus",
            value: "IT security, compliance, and insurance readiness",
          },
          {
            label: "Outcome",
            value: "Improved security posture with minimal disruption",
          },
        ],
      },

      overview: {
        eyebrow: "Case Study Overview",
        title: "IT Security & Compliance Case Study",
        text: "North Bay Manufacturing is a leading provider in its industry, operating in an environment where reliable technology, security controls, and insurance requirements are critical to business continuity.",
      },

      challenges: {
        eyebrow: "Challenges Faced",
        title: "Security requirements were becoming a business priority",
        text: "The client needed practical security improvements that could be implemented quickly, without slowing down day-to-day operations.",
        items: [
          "Difficulty meeting insurance security requirements",
          "Risk of operational disruption",
          "Need for scalable security solutions",
          "Need for fast implementation to reduce downtime",
        ],
      },

      approach: {
        eyebrow: "Our Approach",
        title: "A practical plan focused on security, compliance, and uptime",
        text: "BusinessCompany travelled to North Bay and developed a clear strategy focused on understanding the existing environment, aligning security controls with insurance expectations, and implementing improvements without unnecessary downtime.",
        items: [
          {
            title: "Security Assessment",
            text: "Reviewed the existing IT environment and evaluated current security measures, gaps, and areas of risk.",
          },
          {
            title: "Compliance Strategy",
            text: "Identified insurance-related requirements and aligned recommended security controls with the client’s operational needs.",
          },
          {
            title: "Implementation",
            text: "Integrated improved security measures in a controlled way to help protect operations while minimizing disruption.",
          },
        ],
      },

      results: {
        eyebrow: "Results Achieved",
        title: "Stronger security and a clearer path to insurance approval",
        text: "The project helped North Bay Manufacturing move forward with greater confidence in its security posture and business continuity planning.",
        items: [
          "Enhanced security measures that exceeded insurance requirements",
          "Successful re-insurance at competitive rates",
          "Minimal operational disruption during implementation",
        ],
      },

      quote: {
        text: "BusinessCompany not only met our needs but exceeded our expectations, allowing us to continue our operations smoothly.",
        author: "North Bay Manufacturing",
      },

      conclusion: {
        eyebrow: "Conclusion",
        title: "Tailored IT solutions for security-focused businesses",
        text: "This case study highlights BusinessCompany’s commitment to providing practical IT solutions that support security, compliance, and business continuity. For organizations facing insurance requirements or growing security expectations, the right IT partner can help turn risk into a clear action plan.",
      },

      cta: {
        eyebrow: "Schedule Your Free Analysis",
        title: "Need help meeting IT security or insurance requirements?",
        text: "BusinessCompany can review your environment, identify areas of risk, and help you build a practical path toward stronger security and compliance.",
        buttonLabel: "Schedule a Consultation",
        buttonHref: "/contact-us/",
      },
    },

    aboutPage: {
      seo: {
        title: "Trusted IT Partner in Cambridge, Ontario",
        description:
          "Learn about BusinessCompany, a trusted IT partner based in Cambridge, Ontario, providing managed IT, cybersecurity, cloud, and infrastructure support.",
      },

      hero: {
        eyebrow: "About BusinessCompany",
        title:
          "Senior-Led IT Support Built on Trust, Experience, and Accountability",
        text: "BusinessCompany helps businesses across Ontario manage, secure, and improve their technology with practical IT support, cybersecurity, and long-term guidance.",
        primaryButton: "Talk to an IT Expert",
        secondaryButton: "Explore Our Services",
      },

      team: {
        eyebrow: "Our Team",
        title: "The people behind your IT support",
        text: "Our team works to know your team, your systems, your vendors, and your infrastructure over time. That familiarity makes faster answers, better decisions, and support you can trust.",
        topImageAlt: "BusinessCompany team working together in a modern office",
        imageAlt: "BusinessCompany team members",
        items: [
          "<strong>25+ years</strong> of IT service experience",
          "Remote and onsite support",
          "Business users, networks, cloud, security, and projects",
        ],
      },

      priorities: {
        eyebrow: "How We Recommend Solutions",
        title: "Clear priorities before the spend",
        text: "Not everything needs to be fixed today. We look at what matters most, what can be planned, and what can wait—so you invest with confidence.",
        items: [
          {
            number: "01",
            title: "Fix now",
            text: "Address issues that affect security, reliability, or everyday work.",
          },
          {
            number: "02",
            title: "Plan next",
            text: "Prepare for what’s coming so change is smooth and predictable.",
          },
          {
            number: "03",
            title: "Leave for later",
            text: "Defer items that aren’t a risk right now and revisit when the timing is right.",
          },
        ],
      },

      support: {
        eyebrow: "What We Support",
        title: "The IT pieces work better when they are managed together",
        items: [
          "Managed IT services",
          "Cybersecurity",
          "Microsoft 365",
          "Backup and recovery",
          "Network infrastructure",
          "Servers and workstations",
          "Hardware and software",
          "Vendor coordination",
          "Onsite project work",
        ],
      },

      updates: {
        eyebrow: "When Issues Happen",
        title: "Clear updates when issues affect the business",
        text: "When something goes wrong, clear communication helps your team stay informed and in control.",
        items: [
          {
            title: "What happened",
            text: "A plain-language summary of the issue.",
          },
          {
            title: "What is affected",
            text: "The services, systems, or users impacted.",
          },
          {
            title: "What we are doing",
            text: "Our actions and next steps to resolve it.",
          },
          {
            title: "What comes next",
            text: "Expected timing and how we will follow up.",
          },
        ],
      },

      areas: {
        eyebrow: "Where We Work",
        title: "Local IT support across Ontario and beyond",
        text: "BusinessCompany is based in Cambridge, Ontario, with support for businesses across Waterloo Region, Guelph, the GTA, and other locations when onsite work is needed.",
        items: [
          {
            icon: "pin",
            title: "Cambridge, Ontario",
            text: "Our home base for local IT support, onsite service, and business technology projects.",
          },
          {
            icon: "building",
            title: "Waterloo Region, Guelph, and the GTA",
            text: "Support for growing businesses across Kitchener-Waterloo, Cambridge, Guelph, and the Greater Toronto Area.",
          },
          {
            icon: "globe",
            title: "Remote and extended onsite support",
            text: "Remote support wherever your team works, with extended onsite project support available when required.",
          },
        ],
      },
    },

    blogPage: {
      seo: {
        title: "IT Blog for Business Technology Insights",
        description:
          "Read business IT insights from BusinessCompany, including topics on managed IT, cybersecurity, Microsoft 365, cloud, backup, and infrastructure.",
      },
      hero: {
        eyebrow: "BusinessCompany BLOG",
        title: "Practical IT insights for growing businesses",
        text: "Clear articles on managed IT, cybersecurity, Microsoft 365, backups, networks, and business technology decisions.",
      },

      posts: {
        allPostsEyebrow: "ALL POSTS",
        latestTitle: "Latest articles",
        postsFound: "Posts found",
        readArticle: "Read article",
        read: "Read",
        fallbackCategory: "IT",
      },
    },

    contactUsPage: {
      seo: {
        title: "Contact BusinessCompany for Business IT Support",
        description:
          "Contact BusinessCompany for managed IT services, cybersecurity, Microsoft 365 support, cloud services, backup, and business IT support in Ontario.",
      },

      hero: {
        eyebrow: "CONTACT BusinessCompany",
        title: "Let’s talk about your business IT",
        text: "Tell us what is in place, what is not working, and what needs to improve. Our team will review your message and follow up.",
      },

      details: {
        regularHours: {
          label: "Regular Hours",
          time: "Mon–Fri, 8:00 AM – 5:00 PM",
          phone: "111-111-1111",
          phoneHref: "tel:5192676767",
        },

        afterHours: {
          label: "After-Hours Support",
          time: "24/7 urgent support",
          phone: "222-222-2222",
          phoneHref: "tel:5192129788",
        },

        office: {
          label: "Office",
          addressLine1: "Company Address",
          addressLine2: "Cambridge, ON N3H 4R7",
          directions: "Get directions",
          mapHref: "https://maps.app.goo.gl/xvzKEFAM9J13dEYX8",
        },
      },
    },

    faqPage: {
      seo: {
        title: "BusinessCompany FAQ | Business IT Support Questions",
        description:
          "Find answers to common questions about BusinessCompany's managed IT services, cybersecurity, Microsoft 365, cloud, backup, and business IT support.",
      },
      hero: {
        eyebrow: "FAQ",
        title: "Frequently asked questions",
        text: "Answers to common questions about BusinessCompany’s managed IT, cybersecurity, cloud, backup, and business IT support services.",
      },

      items: [
        {
          question: "What IT services do you offer for businesses?",
          answer:
            "BusinessCompany provides managed IT services, cybersecurity support, Microsoft 365 and cloud services, backup and disaster recovery, network infrastructure, hardware and software support, vendor coordination, and 24/7 urgent support.",
        },
        {
          question: "How can BusinessCompany help improve our data security?",
          answer:
            "BusinessCompany helps strengthen security across users, devices, email, Microsoft 365, firewalls, backups, and access controls. We can review your current environment, identify areas of risk, and recommend practical steps to reduce exposure.",
        },
        {
          question: "What sets BusinessCompany apart from other IT providers?",
          answer:
            "BusinessCompany supports the full business IT environment instead of only one piece of it. That means support, networks, cloud, backups, cybersecurity, vendors, and project work can be handled with better context and fewer handoffs.",
        },
        {
          question: "How quickly can you respond to IT issues?",
          answer:
            "Regular support is available during business hours, with 24/7 after-hours support for urgent issues. Response depends on the type and priority of the issue, but the goal is always to reduce downtime and keep the business moving.",
        },
        {
          question: "Can you help with IT compliance requirements?",
          answer:
            "Yes. BusinessCompany can help with practical security and compliance-related controls such as MFA, backups, access management, endpoint protection, firewall security, Microsoft 365 security settings, documentation, and risk reduction.",
        },
        {
          question: "What is the process for getting started with BusinessCompany?",
          answer:
            "The first step is a conversation about your current IT environment, what is working, what is causing problems, and what needs to improve. From there, BusinessCompany can review the environment and recommend the next steps.",
        },
      ],

      cta: {
        eyebrow: "CONTACT BusinessCompany",
        title: "Still have questions?",
        text: "Tell us what is in place, what is not working, and what needs to improve.",
        button: "Contact BusinessCompany",
      },
    },
  },

  fr: {
    navigation: {
      labels: {
        home: "Accueil",

        servicesOverview: "Services",
        managedIt: "Services TI gérés",
        cybersecurity: "Services de cybersécurité",
        cloudMicrosoft365: "Cloud et Microsoft 365",
        backupDisasterRecovery: "Sauvegarde et reprise après sinistre",
        networkInfrastructure: "Réseau et infrastructure",
        coManagedIt: "TI cogérée et consultation",

        industries: "Industries",
        serviceAreas: "Zones de service",

        about: "À propos",
        blog: "Blogue",
        contact: "Contact",
        faq: "FAQ",
      },
    },

    header: {
      logo: "BusinessCompany Solutions",
      primaryButton: "Réserver une évaluation TI",
    },

    footer: {
      description:
        "Support TI fiable et cybersécurité pour les entreprises qui ne peuvent pas se permettre d’arrêt.",

      services: {
        title: "Services",
        items: [
          {
            label: "Services TI gérés",
            routeKey: "managedIt",
          },
          {
            label: "Services de cybersécurité",
            routeKey: "cybersecurity",
          },
          {
            label: "Cloud et Microsoft 365",
            routeKey: "cloudMicrosoft365",
          },
          {
            label: "Sauvegarde et reprise après sinistre",
            routeKey: "backupDisasterRecovery",
          },
          {
            label: "Réseau et infrastructure",
            routeKey: "networkInfrastructure",
          },
          {
            label: "TI cogérée et consultation",
            routeKey: "coManagedIt",
          },
        ],
      },

      quickLinks: {
        title: "Quick Links",
        items: [
          {
            label: "Accueil",
            routeKey: "home",
          },
          {
            label: "À propos",
            routeKey: "about",
          },
          {
            label: "FAQ",
            routeKey: "faq",
          },
          {
            label: "Contact",
            routeKey: "contact",
          },
        ],
      },

      serviceAreas: {
        title: "Zones de service",
        items: ["Cambridge", "Kitchener-Waterloo", "Guelph", "GTA", "Ontario"],
      },

      contact: {
        title: "Contact",
        phone: "111-111-1111",
        phoneHref: "5192676767",
        hours: "Lun-ven, 8 h à 17 h",
        afterHoursPhone: "222-222-2222",
        afterHoursHref: "5192129788",
        afterHoursLabel: "Support 24/7 après les heures d’ouverture",
        email: "hello@BusinessCompany.ca",
        address: "Company Address, Cambridge, ON N3H 4R7",
      },

      social: {
        title: "Suivez-nous",
      },

      logo: "BusinessCompany Solutions",

      bottom: {
        canadian:
          "Fièrement canadien. Au service des entreprises de l’Ontario.",
        copyright: "© 2025 BusinessCompany Inc. Tous droits réservés.",
        privacy: "Politique de confidentialité",
        terms: "Conditions d’utilisation",
      },
    },

    contactModal: {
      eyebrow: "CONTACTER BusinessCompany",
      title: "Dites-nous comment nous pouvons vous aider",
      text: "Partagez quelques détails sur votre environnement TI d’entreprise et notre équipe vous répondra.",
      closeLabel: "Fermer le formulaire de contact",
    },

    contactForm: {
      honeypotLabel: "Ne remplissez pas ce champ si vous êtes humain :",

      fields: {
        name: {
          label: "Nom",
          placeholder: "Votre nom",
        },
        company: {
          label: "Entreprise",
          placeholder: "Nom de l’entreprise",
        },
        email: {
          label: "Courriel",
          placeholder: "vous@entreprise.com",
        },
        phone: {
          label: "Téléphone",
          placeholder: "519-123-4567",
        },
        service: {
          label: "Comment pouvons-nous vous aider ?",
          placeholder: "Sélectionnez un service",
          options: [
            "Services TI gérés",
            "Cybersécurité",
            "Microsoft 365 / Cloud",
            "Sauvegarde / Reprise après sinistre",
            "Réseau / Infrastructure",
            "TI cogérée / Consultation",
            "Autre",
          ],
        },
        message: {
          label: "Message",
          placeholder:
            "Dites-nous ce qui est en place, ce qui ne fonctionne pas ou ce pour quoi vous avez besoin d’aide.",
        },
      },

      submit: "Envoyer le message",
      urgentNote:
        "Pour un soutien urgent après les heures, appelez le 222-222-2222.",
    },

    sections: {
      contactCta: {
        title: "Prêt à renforcer votre TI?",
        text: "Bâtissons ensemble un environnement TI plus intelligent et plus sécurisé.",
        faq: "Vous avez des questions?",
        faqButtonText: "Consultez notre FAQ →",
        emailLabel: "Écrivez-nous",
        email: "hello@BusinessCompany.ca",
        phone: "111-111-1111",
        phoneHref: "5192676767",
      },
    },

    homePage: {
      seo: {
        title: "Un support TI fiable pour les entreprises",
        description:
          "Support TI fiable, cybersécurité, Microsoft 365, sauvegarde et services réseau pour les entreprises en Ontario.",
      },

      hero: {
        eyebrow: "Support TI qui vous garde en mouvement",
        title:
          "Services TI gérés et soutien informatique aux entreprises en Ontario",
        text: "BusinessCompany offre des services TI gérés proactifs, la cybersécurité, la gestion Microsoft 365, des solutions infonuagiques, les sauvegardes, les réseaux et un soutien informatique réactif aux entreprises partout en Ontario. Nous aidons votre organisation à réduire les interruptions, renforcer sa sécurité et faire évoluer ses technologies en toute confiance.",
        primaryButton: "Réserver une évaluation TI",
        secondaryButton: "Voir les services",
        imageAlt: "Visualisation abstraite d’une infrastructure TI sécurisée",
        expertImageAlt: "Expert en support TI de BusinessCompany",
        expertTextTop: "Parlez à un",
        expertTextBottom: "expert TI",
      },

      trustBar: [
        "25+ ans d’expérience",
        "Surveillance et support 24/7",
        "Équipe dirigée par des experts seniors",
        "SLA garantis",
      ],

      services: {
        eyebrow: "Ce que nous faisons",
        title: "Solutions TI complètes pour votre entreprise",
        text: "Les services TI gérés offrent à votre entreprise un soutien technologique proactif sans les coûts liés au maintien d'une importante équipe TI interne. Chez BusinessCompany, nous regroupons le soutien technique réactif, la cybersécurité, la gestion de Microsoft 365, les solutions infonuagiques, les sauvegardes, les réseaux et la planification stratégique des TI au sein d'un service entièrement géré. Que vous souhaitiez externaliser complètement votre environnement TI ou renforcer votre équipe interne, nous vous aidons à réduire les interruptions, améliorer votre sécurité et soutenir la croissance de votre entreprise.",
        allServicesLabel: "Voir tous les services",
        allServicesHref: "/fr/comprehensive-it-support-services/",

        items: [
          {
            icon: "▣",
            title: "Services TI gérés",
            text: "Support proactif, centre d’assistance, surveillance et gestion TI.",
            linkLabel: "En savoir plus",
            href: "/fr/managed-it-services/",
          },
          {
            icon: "⌂",
            title: "Cybersécurité",
            text: "Protégez votre entreprise contre les menaces et restez conforme.",
            linkLabel: "En savoir plus",
            href: "/fr/cybersecurity-services/",
          },
          {
            icon: "☁",
            title: "Microsoft 365 et Cloud",
            text: "Solutions cloud, migration et gestion continue.",
            linkLabel: "En savoir plus",
            href: "/fr/cloud-microsoft-365/",
          },
          {
            icon: "◎",
            title: "Sauvegarde et reprise",
            text: "Sauvegardes sécurisées et reprise rapide lorsque c’est essentiel.",
            linkLabel: "En savoir plus",
            href: "/fr/backup-disaster-recovery/",
          },
          {
            icon: "⌯",
            title: "Réseau et infrastructure",
            text: "Solutions d’infrastructure fiables, sécurisées et évolutives.",
            linkLabel: "En savoir plus",
            href: "/fr/network-infrastructure/",
          },
          {
            icon: "◌",
            title: "TI cogérée",
            text: "Renforcez votre équipe avec du support TI expert et des conseils.",
            linkLabel: "En savoir plus",
            href: "/fr/co-managed-it-consulting/",
          },
        ],
      },

      whoWeHelp: {
        eyebrow: "Qui nous aidons",
        title: "Un support TI adapté au fonctionnement de votre entreprise",
        text: "BusinessCompany accompagne les entreprises en croissance, les organisations axées sur la conformité et les équipes TI internes qui ont besoin d’un support fiable, sécurisé et pratique.",
        subtitle: "Ce que notre soutien vous permet d'accomplir",
        description:
          "✓ Réduire les interruptions et les temps d'arrêt ✓ Renforcer votre cybersécurité ✓ Améliorer la productivité de vos équipes ✓ Mieux prévoir vos coûts informatiques ✓ Soutenir la croissance de votre entreprise",
        buttonLabel: "Parler à un expert TI",
        buttonHref: "/fr/contact-us/",

        items: [
          {
            icon: "growth",
            title: "Entreprises en croissance",
            text: "Pour les entreprises qui ont besoin d’un support TI fiable, de systèmes sécurisés, de gestion Microsoft 365, de sauvegardes et d’un plan technologique clair à mesure qu’elles grandissent.",
            features: [
              "Support rapide",
              "Courriels et fichiers sécurisés",
              "Sauvegardes et appareils",
            ],
          },
          {
            icon: "shield",
            title: "Organisations axées sur la conformité",
            text: "Pour les entreprises qui ont besoin d’une cybersécurité renforcée, de protection des données, d’une stratégie de sauvegarde, de MFA, de sécurité pare-feu et d’aide liée à l’assurance cyber ou aux exigences de conformité.",
            features: [
              "Contrôles cyber",
              "Confiance en sauvegarde",
              "Surveillance MFA",
            ],
          },
          {
            icon: "team",
            title: "Équipes TI internes",
            text: "Pour les organisations ayant une personne ou une équipe TI interne qui a besoin de support supplémentaire, d’aide sur les projets, d’expertise infrastructure, de conseils en cybersécurité ou de renfort pour le helpdesk.",
            features: [
              "Support projet",
              "Aide à l’escalade",
              "Renfort en périodes chargées",
            ],
          },
        ],
      },

      aboutPreview: {
        eyebrow: "À propos de BusinessCompany",
        title:
          "Fondé sur la confiance. Dirigé par des experts. Axé sur le client.",
        text: "Nous sommes une équipe basée en Ontario qui se soucie de votre réussite. Notre objectif est simple : offrir un support TI fiable, une protection en cybersécurité et des conseils pratiques afin que votre entreprise reste sécurisée, productive et prête pour la suite.",
        linkLabel: "En savoir plus sur nous",
        linkHref: "/fr/about/",
        imageAlt:
          "L’équipe de BusinessCompany discutant du support TI géré dans un bureau",

        badges: [
          { icon: "location", label: "Basé en Ontario" },
          { icon: "team", label: "Expertise senior" },
          { icon: "headset", label: "Support réactif" },
        ],

        floatingBadges: [
          { icon: "team", label: "Support axé sur les affaires" },
          { icon: "shield", label: "Partenaire TI de confiance" },
        ],
      },

      certifications: {
        eyebrow: "Certifications",
        title: "Certifications et expertise",
        text: "Des entreprises partout en Ontario font confiance à BusinessCompany pour un soutien réactif, une communication claire et des conseils TI pratiques. Nos clients apprécient de pouvoir compter sur un partenaire technologique expérimenté qui comprend leur environnement, intervient rapidement et contribue à maintenir leurs systèmes sécuritaires, fiables et productifs. Du soutien quotidien à la planification technologique à long terme, nous misons sur des relations durables et des services TI sur lesquels les entreprises peuvent réellement compter.",

        items: [
          {
            imageKey: "ccna",
            title: "CCNA",
            text: "Cisco Certified Network Associate",
            imageAlt: "Logo de certification Cisco Certified CCNA",
          },
          {
            imageKey: "pmp",
            title: "PMP",
            text: "Project Management Professional",
            imageAlt: "Logo de certification Project Management Professional",
          },
          {
            imageKey: "comptia",
            title: "CompTIA A+",
            text: "Certification de technicien TI",
            imageAlt: "Logo de certification CompTIA A Plus",
          },
          {
            imageKey: "ceh",
            title: "CEH",
            text: "Certified Ethical Hacker",
            imageAlt: "Logo de certification Certified Ethical Hacker",
          },
          {
            imageKey: "cissp",
            title: "CISSP",
            text: "Certified Information Systems Security Professional",
            imageAlt: "Logo de certification CISSP",
          },
        ],
      },

      technologyExpertise: {
        eyebrow: "Expertise technologique",
        title: "Le soutien des technologies essentielles à votre entreprise",
        text: "Notre équipe prend en charge les plateformes infonuagiques modernes, les applications d’entreprise, les réseaux, les systèmes de sécurité et les infrastructures sur place. De Microsoft 365 et Azure aux pare-feu Fortinet, aux réseaux Cisco, à Windows Server et aux sauvegardes infonuagiques sécurisées, nous aidons les entreprises à maintenir des environnements TI fiables et bien gérés.",
        secondaryText:
          "Nous soutenons également la continuité des activités, la reprise après sinistre, la gestion des identités, les plateformes de collaboration et les systèmes utilisés chaque jour par vos employés.",
        technologies: [
          "Microsoft 365",
          "Azure",
          "Entra ID",
          "SharePoint",
          "Microsoft Teams",
          "Exchange",
          "Windows Server",
          "Fortinet",
          "Cisco",
          "Sauvegarde infonuagique",
          "Reprise après sinistre",
        ],
      },

      testimonials: {
        eyebrow: "Avis des clients",
        title: "Approuvé par les entreprises locales",
        text: "Un support réactif, des conseils pratiques et des services TI fiables pour les organisations qui ne peuvent pas se permettre d’arrêt.",

        items: [
          {
            quote:
              "BusinessCompany est devenu un véritable partenaire pour notre entreprise. Leur équipe est réactive, proactive et veille toujours à nos intérêts.",
            rating: 5,
            author: "Directeur des opérations, fabrication",
            company: "Northfield Manufacturing",
            companyMark: "N",
            industry: "Fabrication",
          },
          {
            quote:
              "Nous dormons mieux en sachant que nos systèmes sont sécurisés et sauvegardés. BusinessCompany comprend vraiment nos besoins.",
            rating: 5,
            author: "Propriétaire, services professionnels",
            company: "Summit Professional Group",
            companyMark: "S",
            industry: "Services professionnels",
          },
          {
            quote:
              "Support rapide, communication claire et conseils TI pratiques. Ils nous aident à maintenir nos opérations en mouvement.",
            rating: 5,
            author: "Directeur général, logistique",
            company: "Maple Ridge Logistics",
            companyMark: "M",
            industry: "Logistique",
          },
        ],
      },

      locations: {
        eyebrow: "Où nous intervenons",
        title: "Présence locale. Portée élargie.",
        text: "Basée dans le sud-ouest de l’Ontario, BusinessCompany fournit un support TI fiable aux entreprises partout en Ontario et au-delà.",
        linkLabel: "Parler à notre équipe",
        linkHref: "/fr/contact-us/",
        mapAlt:
          "Carte du Canada montrant les zones de service de BusinessCompany en Ontario et au-delà",

        areas: [
          "Cambridge",
          "Kitchener-Waterloo",
          "Guelph",
          "GTA",
          "Ontario",
          "Québec",
          "Manitoba",
        ],

        features: [
          {
            icon: "ontario",
            title: "Basé en Ontario",
            text: "Fièrement établi dans le sud-ouest de l’Ontario",
          },
          {
            icon: "remote",
            title: "À distance + sur site",
            text: "Support flexible là où vous en avez besoin",
          },
          {
            icon: "building",
            title: "Support multi-sites",
            text: "Nous évoluons avec votre entreprise",
          },
        ],

        mapLabels: [
          { text: "Manitoba", x: "16%", y: "39%" },
          { text: "Québec", x: "86%", y: "35%" },
          { text: "Kitchener-Waterloo Cambridge", x: "54%", y: "70%" },
          { text: "GTA", x: "78%", y: "72%" },
        ],

        supportCard: {
          title: "Support aux entreprises en Ontario et au-delà.",
          text: "Des partenariats locaux à une couverture élargie.",
        },
      },
    },

    servicesOverviewPage: {
      seo: {
        title: "Services de soutien informatique pour entreprises",
        description:
          "Découvrez les services TI de BusinessCompany, incluant TI gérée, cybersécurité, Microsoft 365, cloud, sauvegarde, reprise après sinistre et infrastructure.",
      },

      hero: {
        eyebrow: "SERVICES TI",
        title: "Des services TI d’entreprise qui fonctionnent ensemble",
        text: "BusinessCompany aide les entreprises à gérer les éléments essentiels de leur environnement TI — soutien, sécurité, Microsoft 365, sauvegardes, réseaux, infrastructure et projets.",
      },

      intro: {
        eyebrow: "Ensemble, plus solides",
        title:
          "Une seule équipe pour les éléments qui gardent votre entreprise opérationnelle",
        text: "La plupart des problèmes TI ne surviennent pas de façon isolée. Les courriels, les appareils, les réseaux, la sécurité, les sauvegardes et les fournisseurs sont tous liés. BusinessCompany aide à gérer l’environnement complet afin que les problèmes soient traités avec le bon contexte.",
      },

      servicesEyebrow: {
        eyebrow: "Nos services",
      },

      services: [
        {
          title: "Services TI gérés",
          text: "Soutien informatique quotidien, surveillance, maintenance, assistance aux utilisateurs et gestion continue des technologies d’entreprise.",
          href: "/managed-it-services/",
        },
        {
          title: "Services de cybersécurité",
          text: "Soutien de sécurité pratique pour les utilisateurs, appareils, courriels, Microsoft 365, pare-feu, contrôles d’accès et réduction des risques.",
          href: "/cybersecurity-services/",
        },
        {
          title: "Cloud et Microsoft 365",
          text: "Configuration Microsoft 365, soutien, migrations, gestion des comptes, permissions, paramètres de sécurité et consultation cloud.",
          href: "/cloud-microsoft-365/",
        },
        {
          title: "Sauvegarde et reprise après sinistre",
          text: "Planification des sauvegardes, surveillance, soutien à la récupération et conseils en reprise après sinistre pour les systèmes d’entreprise et les données cloud.",
          href: "/backup-disaster-recovery/",
        },
        {
          title: "Réseau et infrastructure",
          text: "Soutien pour pare-feu, commutation, Wi-Fi, VPN, serveurs, stockage et infrastructure dans les environnements d’entreprise.",
          href: "/network-infrastructure/",
        },
        {
          title: "TI cogérée et consultation",
          text: "Soutien aux équipes TI internes, planification de projets, escalades, coordination avec les fournisseurs et conseils techniques seniors.",
          href: "/co-managed-it-consulting/",
        },
      ],

      cta: {
        eyebrow: "VOUS NE SAVEZ PAS PAR OÙ COMMENCER ?",
        title: "Dites-nous ce qui est en place et ce qui doit être amélioré.",
        text: "BusinessCompany peut vous aider à évaluer votre environnement actuel et à recommander ce qui doit être corrigé maintenant, planifié ensuite ou gardé pour plus tard.",
        button: "Contacter BusinessCompany",
      },
    },

    services: {
      managedItServicesPage: {
        seo: {
          title: "Services TI gérés à Cambridge et en Ontario",
          description:
            "Services TI gérés fiables pour les entreprises de Cambridge, Kitchener-Waterloo, Guelph, GTA et partout en Ontario.",
        },
        hero: {
          eyebrow: "Services TI gérés",
          title:
            "Des services TI gérés qui assurent la continuité de vos activités",
          text: "Un soutien informatique fiable au quotidien, avec surveillance, maintenance et sécurité pour les entreprises qui ont besoin d’une technologie stable et sans interruptions constantes.",
          button: {
            label: "Contactez-nous",
            href: "/fr/contact-us/",
          },
          badges: {
            top: {
              value: "24/7",
              label: "Surveillance",
            },
            bottom: {
              value: "Dirigé par des experts",
              label: "Soutien",
            },
          },
        },

        support: {
          title: "Des questions?",
          text: "Nous sommes disponibles 24/7.",
          phone: "222-222-2222",
          phoneHref: "5192129788",
          note: "Soutien après les heures d’ouverture",
        },

        navItems: [
          { label: "Aperçu", href: "#overview" },
          { label: "Pour qui?", href: "#who-its-for" },
          { label: "Ce qui est inclus", href: "#included" },
          { label: "Notre approche", href: "#how-it-works" },
          { label: "TI gérée vs réactive", href: "#comparison" },
          { label: "Services connexes", href: "#related-services" },
          { label: "Zones desservies", href: "#service-areas" },
        ],

        overview: {
          eyebrow: "Aperçu",
          title:
            "Un soutien informatique fiable pour les opérations quotidiennes",
          paragraphs: [
            "BusinessCompany Solutions Inc. offre du soutien continu, de la surveillance, de la maintenance et de la coordination pour garder vos systèmes sécurisés, fiables et performants.",
            "Nous agissons comme une extension de votre équipe — en prenant en charge les opérations informatiques quotidiennes afin que vous puissiez vous concentrer sur la gestion et la croissance de votre entreprise.",
            "Au lieu d’attendre que les utilisateurs signalent des problèmes, les services TI gérés offrent à votre entreprise une visibilité continue sur les appareils, les systèmes, les mises à jour, la sécurité, les sauvegardes et les problèmes récurrents. Notre équipe travaille de façon proactive afin de détecter les problèmes plus tôt et de maintenir votre environnement bien documenté, à jour et plus facile à soutenir.",
          ],
          highlights: [
            {
              icon: "shield",
              title: "Plus de 25 ans de prestation de services informatiques",
              text: "Des décennies d’expérience à soutenir des entreprises en Ontario et au-delà.",
            },
            {
              icon: "clock",
              title: "Soutien disponible 24/7",
              text: "Nous sommes là lorsque vous avez besoin de nous — le jour, la nuit et les fins de semaine.",
            },
            {
              icon: "location",
              title: "Équipe locale. Portée élargie.",
              text: "Basée à Cambridge, en Ontario, notre équipe soutient des entreprises partout dans la province et au-delà.",
            },
          ],
        },
        whoItsFor: {
          eyebrow: "Pour qui?",
          title: "Les services TI gérés conviennent-ils à votre entreprise?",
          text: "Les services TI gérés conviennent aux entreprises qui souhaitent réduire les interruptions, améliorer la visibilité sur leur technologie et compter sur une équipe responsable du bon fonctionnement de leur environnement TI au quotidien.",

          items: [
            {
              title: "Entreprises en croissance",
              text: "À mesure que votre équipe, vos appareils, vos sites et vos systèmes se développent, la gestion des TI devient plus complexe. Nous vous aidons à maintenir un environnement organisé, fiable et prêt à soutenir la croissance de votre entreprise.",
            },
            {
              title: "Entreprises sans équipe TI interne dédiée",
              text: "Obtenez un soutien technique et une gestion TI continus sans avoir à mettre sur pied et à maintenir un service informatique interne complet.",
            },
            {
              title: "Équipes confrontées à des problèmes TI récurrents",
              text: "Passez d’une approche où les mêmes problèmes sont constamment réparés à une gestion proactive axée sur la surveillance, la documentation, la maintenance et l’amélioration à long terme.",
            },
            {
              title:
                "Entreprises travaillant avec plusieurs fournisseurs technologiques",
              text: "Confiez à un seul partenaire TI la coordination de vos fournisseurs Internet, logiciels, Microsoft 365, matériel et autres relations technologiques.",
            },
          ],
        },
        included: {
          eyebrow: "Ce qui est inclus",
          title:
            "Tout ce dont votre entreprise a besoin pour rester productive",
          items: [
            "Surveillance 24/7",
            "Soutien aux utilisateurs",
            "Soutien à distance et sur site",
            "Gestion des correctifs et des mises à jour",
            "Gestion des serveurs et des postes de travail",
            "Documentation informatique",
            "Coordination avec les fournisseurs",
            "Maintenance proactive",
            "Surveillance de la sécurité et des sauvegardes",
            "Planification technologique et rapports",
          ],
        },
        process: {
          eyebrow: "Notre approche",
          title: "Un processus clair pour garder votre TI en bon état",
          steps: [
            {
              number: "01",
              title: "Évaluer",
              text: "Nous examinons votre environnement, vos utilisateurs, vos systèmes, vos fournisseurs et vos priorités d’affaires.",
              icon: "search",
            },
            {
              number: "02",
              title: "Documenter",
              text: "Nous organisons les informations clés afin que votre environnement TI soit plus facile à soutenir et à gérer.",
              icon: "document",
            },
            {
              number: "03",
              title: "Surveiller et soutenir",
              text: "Nous assurons la surveillance continue, la maintenance, le soutien aux utilisateurs et la résolution des problèmes.",
              icon: "monitor",
            },
            {
              number: "04",
              title: "Améliorer",
              text: "Nous aidons à renforcer vos systèmes au fil du temps avec des recommandations pratiques et de la planification.",
              icon: "growth",
            },
          ],
        },
        comparison: {
          eyebrow: "Un modèle de soutien plus intelligent",
          title: "Services TI gérés vs soutien informatique réactif",
          text: "Le soutien réactif attend que les problèmes surviennent. Les services TI gérés misent sur la prévention, la visibilité et une responsabilité continue afin que votre entreprise demeure productive avec moins d’interruptions.",
          columns: {
            managed: "Services TI gérés",
            reactive: "Soutien informatique réactif",
          },
          rows: [
            {
              label: "Approche",
              managed: "Surveillance proactive pour prévenir les problèmes",
              reactive: "Intervention après l’apparition des problèmes",
            },
            {
              label: "Coût",
              managed: "Soutien et budget plus prévisibles",
              reactive: "Interventions ponctuelles aux coûts variables",
            },
            {
              label: "Visibilité",
              managed: "Documentation continue et meilleure visibilité",
              reactive: "Visibilité limitée et dossiers inconsistants",
            },
            {
              label: "Responsabilité",
              managed: "Une seule équipe responsable",
              reactive: "Plusieurs fournisseurs et des enjeux non résolus",
            },
            {
              label: "Résultat",
              managed: "Moins d’interruptions et de meilleures performances",
              reactive: "Plus de temps d’arrêt et plus de stress",
            },
          ],
        },
        connectedServices: {
          eyebrow: "Services TI connexes",
          title:
            "Des services TI gérés connectés au reste de votre technologie",
          text: "Les services TI gérés incluent souvent la coordination entre la cybersécurité, Microsoft 365, les sauvegardes, le réseau et l’infrastructure. Pour les entreprises qui ont besoin d’un soutien plus approfondi dans ces domaines, BusinessCompany offre des services spécialisés.",
          ariaLabel: "Services TI connexes",
          services: [
            {
              title: "Services de cybersécurité",
              href: "/fr/cybersecurity-services/",
            },
            {
              title: "Cloud et Microsoft 365",
              href: "/fr/cloud-microsoft-365/",
            },
            {
              title: "Sauvegarde et reprise après sinistre",
              href: "/fr/backup-disaster-recovery/",
            },
            {
              title: "Infrastructure réseau",
              href: "/fr/network-infrastructure/",
            },
            {
              title: "TI cogérée et consultation",
              href: "/fr/co-managed-it-consulting/",
            },
          ],
        },
        areas: {
          eyebrow: "Zones desservies",
          title: "Soutien TI géré partout en Ontario",
          text: "Basée à Cambridge, en Ontario, BusinessCompany soutient les entreprises de Cambridge, Kitchener, Waterloo, Guelph, du GTA et du reste de l’Ontario. Pour les déploiements plus importants, l’équipe peut se déplacer sur site du Manitoba au Québec, puis assurer le soutien continu à distance après l’installation.",
          items: [
            {
              title: "Cambridge, Kitchener, Waterloo et Guelph",
              text: "Un soutien TI local par une équipe qui connaît bien la région.",
              icon: "pin",
            },
            {
              title: "GTA et entreprises partout en Ontario",
              text: "Soutien sur site et à distance à travers la province.",
              icon: "building",
            },
            {
              title: "Déploiements du Manitoba au Québec",
              text: "Installation physique et configuration sur place au besoin, suivies d’un soutien continu à distance.",
              icon: "globe",
            },
          ],
        },
        faq: {
          eyebrow: "Questions fréquentes",
          title: "FAQ sur les services TI gérés",

          items: [
            {
              question: "Que sont les services TI gérés?",
              answer:
                "Les services TI gérés comprennent la surveillance, la maintenance, le soutien technique et la gestion continue de votre environnement technologique plutôt que d’attendre qu’un problème survienne.",
            },
            {
              question: "Qu’est-ce qui est inclus dans le soutien TI géré?",
              answer:
                "Les services peuvent comprendre le soutien technique, la surveillance, la gestion des correctifs, la gestion des postes de travail et des serveurs, la documentation, la coordination avec les fournisseurs, la surveillance de la sécurité et des sauvegardes ainsi que la planification technologique.",
            },
          ],
        },
      },
      cybersecurityServicesPage: {
        seo: {
          title: "Services de cybersécurité pour entreprises en Ontario",
          description:
            "Protégez votre entreprise avec des services de cybersécurité, protection des postes, sécurité Microsoft 365, surveillance, sécurité courriel et réduction des risques.",
        },
        hero: {
          eyebrow: "Services de cybersécurité",
          title: "Des services de cybersécurité pour protéger votre entreprise",
          text: "Des services de cybersécurité pratiques pour les entreprises qui veulent renforcer la protection des utilisateurs, appareils, réseaux, Microsoft 365 et opérations quotidiennes.",
          button: {
            label: "Contactez-nous",
            href: "/fr/contact-us/",
          },
          badges: {
            top: {
              value: "24/7",
              label: "Surveillance",
            },
            bottom: {
              value: "Entreprise",
              label: "Protection",
            },
          },
        },

        navItems: [
          { label: "Aperçu", href: "#overview" },
          { label: "Ce qui est inclus", href: "#included" },
          { label: "Notre approche", href: "#how-it-works" },
          { label: "Services connexes", href: "#related-services" },
          { label: "Zones desservies", href: "#service-areas" },
        ],

        support: {
          title: "Préoccupations de sécurité?",
          text: "Nous sommes disponibles 24/7.",
          phone: "222-222-2222",
          phoneHref: "5192129788",
          note: "Soutien après les heures d’ouverture",
        },

        overview: {
          eyebrow: "Aperçu",
          title:
            "Un soutien en cybersécurité adapté aux risques réels des entreprises",
          paragraphs: [
            "BusinessCompany Solutions Inc. aide les entreprises à renforcer leur cybersécurité grâce à une protection pratique des appareils, utilisateurs, systèmes cloud, réseaux et données essentielles.",
            "Notre approche mise sur la prévention, la visibilité et une réponse rapide — afin de réduire les risques sans rendre la sécurité compliquée pour votre équipe.",
          ],
          highlights: [
            {
              icon: "shield",
              title: "Protection d’entreprise en plusieurs couches",
              text: "Soutien de sécurité pour les endpoints, réseaux, Microsoft 365, sauvegardes et accès utilisateurs.",
            },
            {
              icon: "clock",
              title: "Surveillance disponible 24/7",
              text: "Une visibilité continue aide à repérer les activités suspectes avant qu’elles deviennent un problème majeur.",
            },
            {
              icon: "location",
              title: "Équipe locale en Ontario. Portée élargie.",
              text: "Basée à Cambridge, notre équipe soutient des entreprises partout en Ontario et au-delà.",
            },
          ],
        },

        included: {
          eyebrow: "Ce qui est inclus",
          title:
            "Des services de cybersécurité pour renforcer votre environnement d’affaires",
          items: [
            "Sécurité et surveillance des endpoints",
            "Soutien à la sécurité Microsoft 365",
            "Sécurité des pare-feu et du réseau",
            "Gestion des accès utilisateurs et MFA",
            "Recommandations de politiques de sécurité",
            "Surveillance des menaces et analyse des alertes",
            "Coordination des correctifs et vulnérabilités",
            "Vérifications de sécurité des sauvegardes",
            "Soutien en réponse aux incidents",
            "Conseils de sensibilisation à la sécurité",
          ],
        },

        process: {
          eyebrow: "Notre approche",
          title:
            "Un processus pratique pour réduire les risques de cybersécurité",
          steps: [
            {
              number: "01",
              title: "Analyser",
              text: "Nous examinons votre posture de sécurité, vos systèmes, vos utilisateurs, vos accès et les zones de risque.",
              icon: "search",
            },
            {
              number: "02",
              title: "Prioriser",
              text: "Nous identifions les risques les plus importants et recommandons des mesures concrètes pour réduire l’exposition.",
              icon: "document",
            },
            {
              number: "03",
              title: "Protéger et surveiller",
              text: "Nous aidons à mettre en place les contrôles de sécurité, surveiller les alertes et soutenir la protection quotidienne.",
              icon: "monitor",
            },
            {
              number: "04",
              title: "Améliorer",
              text: "Nous continuons à renforcer votre environnement à mesure que les menaces, les outils et les besoins évoluent.",
              icon: "growth",
            },
          ],
        },

        caseStudyPromo: {
          eyebrow: "Étude de cas connexe",
          title:
            "Comment BusinessCompany a aidé North Bay Manufacturing à rester sécurisé et assuré",
          text: "Découvrez comment un projet ciblé en sécurité TI et conformité a permis de renforcer la protection, de soutenir les exigences d’assurance et de réduire les perturbations opérationnelles.",
          tags: [
            "Préparation à l’assurance",
            "Évaluation de sécurité",
            "Temps d’arrêt minimal",
          ],
          buttonLabel: "Lire l’étude de cas",
          buttonHref: "/fr/it-security-compliance-case-study/",
        },

        connectedServices: {
          eyebrow: "Services TI connexes",
          title: "Une cybersécurité connectée au reste de votre TI",
          text: "Une cybersécurité solide ne dépend pas d’un seul outil. Elle est liée aux services TI gérés, à Microsoft 365, aux sauvegardes, à l’infrastructure réseau et à la planification informatique.",
          ariaLabel: "Services TI connexes",
          services: [
            {
              title: "Services TI gérés",
              href: "/fr/managed-it-services/",
            },
            {
              title: "Cloud et Microsoft 365",
              href: "/fr/cloud-microsoft-365/",
            },
            {
              title: "Sauvegarde et reprise après sinistre",
              href: "/fr/backup-disaster-recovery/",
            },
            {
              title: "Infrastructure réseau",
              href: "/fr/network-infrastructure/",
            },
            {
              title: "TI cogérée et consultation",
              href: "/fr/co-managed-it-consulting/",
            },
          ],
        },

        areas: {
          eyebrow: "Zones desservies",
          title: "Soutien en cybersécurité partout en Ontario",
          text: "Basée à Cambridge, en Ontario, BusinessCompany soutient les entreprises de Cambridge, Kitchener, Waterloo, Guelph, du GTA et du reste de l’Ontario. Pour les déploiements plus importants, l’équipe peut se déplacer sur site du Manitoba au Québec, puis assurer le soutien continu à distance après l’installation.",
          items: [
            {
              title: "Cambridge, Kitchener, Waterloo et Guelph",
              text: "Un soutien local en cybersécurité et en TI par une équipe qui connaît bien la région.",
              icon: "pin",
            },
            {
              title: "GTA et entreprises partout en Ontario",
              text: "Soutien de sécurité pour les utilisateurs, réseaux, systèmes cloud et infrastructures d’entreprise.",
              icon: "building",
            },
            {
              title: "Déploiements du Manitoba au Québec",
              text: "Installation physique et configuration sur place au besoin, suivies d’un soutien continu à distance.",
              icon: "globe",
            },
          ],
        },
      },
      cloudMicrosoft365Page: {
        seo: {
          title: "Services cloud et Microsoft 365 pour entreprises",
          description:
            "Soutien Microsoft 365, services cloud, gestion des utilisateurs, migrations, amélioration de la sécurité et consultation cloud pour entreprises en Ontario.",
        },
        hero: {
          eyebrow: "Cloud et Microsoft 365",
          title:
            "Soutien Microsoft 365 et services cloud pour votre entreprise",
          text: "Un soutien cloud et Microsoft 365 fiable et sécurisé pour le courriel d’entreprise, Teams, SharePoint, les utilisateurs, les appareils, les licences et la productivité quotidienne.",
          button: {
            label: "Contactez-nous",
            href: "/fr/contact-us/",
          },
          badges: {
            top: {
              value: "M365",
              label: "Soutien",
            },
            bottom: {
              value: "Cloud",
              label: "Prêt",
            },
          },
        },

        navItems: [
          { label: "Aperçu", href: "#overview" },
          { label: "Ce qui est inclus", href: "#included" },
          { label: "Notre approche", href: "#how-it-works" },
          { label: "Services connexes", href: "#related-services" },
          { label: "Zones desservies", href: "#service-areas" },
        ],

        support: {
          title: "Besoin de soutien cloud?",
          text: "Nous sommes disponibles 24/7.",
          phone: "222-222-2222",
          phoneHref: "5192129788",
          note: "Soutien après les heures d’ouverture",
        },

        overview: {
          eyebrow: "Aperçu",
          title: "Un soutien cloud et Microsoft 365 conçu pour la productivité",
          paragraphs: [
            "BusinessCompany Solutions Inc. aide les entreprises à gérer Microsoft 365, les services cloud, le courriel, les outils de collaboration, les accès utilisateurs et la sécurité cloud afin que les équipes puissent travailler plus efficacement, où qu’elles soient.",
            "De la configuration et migration Microsoft 365 au soutien et à l’administration continus, nous aidons à garder votre environnement cloud organisé, sécurisé et aligné avec vos opérations.",
          ],
          highlights: [
            {
              icon: "shield",
              title: "Environnements Microsoft 365 sécurisés",
              text: "Soutien pour le contrôle des accès, le MFA, la sécurité du courriel, les permissions et la configuration cloud.",
            },
            {
              icon: "clock",
              title: "Soutien et administration continus",
              text: "Aide pour les enjeux Microsoft 365 quotidiens, les changements d’utilisateurs, les licences et la gestion des services cloud.",
            },
            {
              icon: "location",
              title: "Équipe locale. Soutien à distance.",
              text: "Basée à Cambridge, en Ontario, notre équipe soutient les environnements cloud des entreprises en Ontario et au-delà.",
            },
          ],
        },

        included: {
          eyebrow: "Ce qui est inclus",
          title:
            "Des services Microsoft 365 et cloud pour soutenir vos opérations quotidiennes",
          items: [
            "Configuration et administration Microsoft 365",
            "Soutien du courriel d’entreprise et Exchange Online",
            "Soutien Teams, SharePoint et OneDrive",
            "Création et retrait des utilisateurs",
            "Conseils sur les licences Microsoft 365",
            "Soutien aux migrations cloud",
            "MFA et sécurité des accès",
            "Sécurité du courriel et protection antispam",
            "Coordination des appareils et des comptes",
            "Soutien cloud continu et dépannage",
          ],
        },

        process: {
          eyebrow: "Notre approche",
          title: "Un processus clair pour gérer votre environnement cloud",
          steps: [
            {
              number: "01",
              title: "Analyser",
              text: "Nous examinons votre tenant Microsoft 365, vos utilisateurs, vos licences, votre courriel, vos paramètres de sécurité et vos outils cloud.",
              icon: "search",
            },
            {
              number: "02",
              title: "Planifier",
              text: "Nous identifions ce qui doit être nettoyé, sécurisé, migré ou mieux organisé.",
              icon: "document",
            },
            {
              number: "03",
              title: "Soutenir et gérer",
              text: "Nous offrons un soutien continu pour les utilisateurs, le courriel, Teams, SharePoint, OneDrive et l’administration cloud.",
              icon: "monitor",
            },
            {
              number: "04",
              title: "Améliorer",
              text: "Nous aidons à optimiser les licences, la sécurité, la collaboration et les flux de travail cloud à mesure que votre entreprise évolue.",
              icon: "growth",
            },
          ],
        },

        connectedServices: {
          eyebrow: "Services TI connexes",
          title: "Un soutien cloud connecté au reste de votre TI",
          text: "Microsoft 365 et les services cloud fonctionnent mieux lorsqu’ils sont soutenus avec la cybersécurité, les services TI gérés, les sauvegardes, le réseau et la planification technologique.",
          ariaLabel: "Services TI connexes",
          services: [
            {
              title: "Services TI gérés",
              href: "/fr/managed-it-services/",
            },
            {
              title: "Services de cybersécurité",
              href: "/fr/cybersecurity-services/",
            },
            {
              title: "Sauvegarde et reprise après sinistre",
              href: "/fr/backup-disaster-recovery/",
            },
            {
              title: "Infrastructure réseau",
              href: "/fr/network-infrastructure/",
            },
            {
              title: "TI cogérée et consultation",
              href: "/fr/co-managed-it-consulting/",
            },
          ],
        },

        areas: {
          eyebrow: "Zones desservies",
          title: "Soutien Microsoft 365 partout en Ontario",
          text: "Basée à Cambridge, en Ontario, BusinessCompany soutient les entreprises de Cambridge, Kitchener, Waterloo, Guelph, du GTA et du reste de l’Ontario. Pour les déploiements plus importants, l’équipe peut se déplacer sur site du Manitoba au Québec, puis assurer le soutien continu à distance après l’installation.",
          items: [
            {
              title: "Cambridge, Kitchener, Waterloo et Guelph",
              text: "Un soutien Microsoft 365 et cloud local par une équipe qui connaît bien la région.",
              icon: "pin",
            },
            {
              title: "GTA et entreprises partout en Ontario",
              text: "Soutien cloud pour le courriel, la collaboration, les utilisateurs, les appareils et les accès.",
              icon: "building",
            },
            {
              title: "Déploiements du Manitoba au Québec",
              text: "Installation physique et configuration sur place au besoin, suivies d’un soutien continu à distance.",
              icon: "globe",
            },
          ],
        },
      },
      backupDisasterRecoveryPage: {
        seo: {
          title: "Services de sauvegarde et reprise après sinistre",
          description:
            "Protégez vos données avec sauvegarde, planification de reprise, sauvegarde Microsoft 365, sauvegarde serveur, tests de récupération et continuité des activités.",
        },
        hero: {
          eyebrow: "Sauvegarde et reprise après sinistre",
          title:
            "Services de sauvegarde et reprise après sinistre pour la continuité des affaires",
          text: "Un soutien fiable en sauvegarde de données, reprise après sinistre et continuité des affaires pour protéger vos systèmes, fichiers, serveurs et opérations critiques.",
          button: {
            label: "Contactez-nous",
            href: "/fr/contact-us/",
          },
          badges: {
            top: {
              value: "Sauvegarde",
              label: "Protégée",
            },
            bottom: {
              value: "Reprise",
              label: "Prête",
            },
          },
        },

        navItems: [
          { label: "Aperçu", href: "#overview" },
          { label: "Ce qui est inclus", href: "#included" },
          { label: "Notre approche", href: "#how-it-works" },
          { label: "Services connexes", href: "#related-services" },
          { label: "Zones desservies", href: "#service-areas" },
        ],

        support: {
          title: "Préoccupations de sauvegarde?",
          text: "Nous sommes disponibles 24/7.",
          phone: "222-222-2222",
          phoneHref: "5192129788",
          note: "Soutien après les heures d’ouverture",
        },

        overview: {
          eyebrow: "Aperçu",
          title:
            "Un soutien en sauvegarde et reprise conçu pour les vrais risques d’interruption",
          paragraphs: [
            "BusinessCompany Solutions Inc. aide les entreprises à protéger leurs données importantes, serveurs, systèmes cloud et applications critiques grâce à des solutions pratiques de sauvegarde et de reprise après sinistre.",
            "Notre objectif n’est pas seulement de sauvegarder vos données, mais de vous aider à récupérer lorsque quelque chose tourne mal — panne matérielle, suppression accidentelle, incident de cybersécurité ou interruption majeure.",
          ],
          highlights: [
            {
              icon: "shield",
              title: "Protection des données critiques",
              text: "Soutien de sauvegarde pour les serveurs, fichiers, systèmes cloud, Microsoft 365 et applications d’entreprise.",
            },
            {
              icon: "clock",
              title: "Planification axée sur la reprise",
              text: "Une sauvegarde n’est utile que si elle peut être restaurée lorsque votre entreprise en a le plus besoin.",
            },
            {
              icon: "location",
              title: "Soutien local. Portée élargie.",
              text: "Basée à Cambridge, notre équipe soutient des entreprises partout en Ontario et au-delà.",
            },
          ],
        },

        included: {
          eyebrow: "Ce qui est inclus",
          title:
            "Des services de sauvegarde et reprise pour réduire les temps d’arrêt",
          items: [
            "Soutien à la sauvegarde des données d’entreprise",
            "Coordination des sauvegardes de serveurs",
            "Solutions de sauvegarde cloud",
            "Conseils de sauvegarde Microsoft 365",
            "Planification de reprise après sinistre",
            "Surveillance des sauvegardes et analyse des alertes",
            "Coordination des tests de récupération",
            "Préparation à la reprise après rançongiciel",
            "Soutien à la continuité des affaires",
            "Documentation et rapports de sauvegarde",
          ],
        },

        process: {
          eyebrow: "Notre approche",
          title:
            "Un processus pratique pour protéger et récupérer vos données d’entreprise",
          steps: [
            {
              number: "01",
              title: "Analyser",
              text: "Nous examinons vos systèmes, données, applications, besoins de récupération et couverture de sauvegarde actuelle.",
              icon: "search",
            },
            {
              number: "02",
              title: "Planifier",
              text: "Nous identifions ce qui doit être protégé et aidons à définir des priorités de reprise réalistes pour votre entreprise.",
              icon: "document",
            },
            {
              number: "03",
              title: "Protéger et surveiller",
              text: "Nous aidons à coordonner les solutions de sauvegarde, surveiller leur état et examiner les alertes ou échecs.",
              icon: "monitor",
            },
            {
              number: "04",
              title: "Récupérer",
              text: "Nous soutenons la planification de reprise et les étapes de restauration afin que votre entreprise puisse revenir en ligne plus rapidement.",
              icon: "growth",
            },
          ],
        },

        connectedServices: {
          eyebrow: "Services TI connexes",
          title: "Sauvegarde et reprise connectées au reste de votre TI",
          text: "Une stratégie solide de sauvegarde et reprise après sinistre fonctionne mieux lorsqu’elle est liée aux services TI gérés, à la cybersécurité, à Microsoft 365, à l’infrastructure et à la planification technologique.",
          ariaLabel: "Services TI connexes",
          services: [
            {
              title: "Services TI gérés",
              href: "/fr/managed-it-services/",
            },
            {
              title: "Services de cybersécurité",
              href: "/fr/cybersecurity-services/",
            },
            {
              title: "Cloud et Microsoft 365",
              href: "/fr/cloud-microsoft-365/",
            },
            {
              title: "Infrastructure réseau",
              href: "/fr/network-infrastructure/",
            },
            {
              title: "TI cogérée et consultation",
              href: "/fr/co-managed-it-consulting/",
            },
          ],
        },

        areas: {
          eyebrow: "Zones desservies",
          title: "Soutien en sauvegarde et reprise partout en Ontario",
          text: "Basée à Cambridge, en Ontario, BusinessCompany soutient les entreprises de Cambridge, Kitchener, Waterloo, Guelph, du GTA et du reste de l’Ontario. Pour les déploiements plus importants, l’équipe peut se déplacer sur site du Manitoba au Québec, puis assurer le soutien continu à distance après l’installation.",
          items: [
            {
              title: "Cambridge, Kitchener, Waterloo et Guelph",
              text: "Un soutien local en sauvegarde et reprise par une équipe qui connaît bien la région.",
              icon: "pin",
            },
            {
              title: "GTA et entreprises partout en Ontario",
              text: "Soutien en sauvegarde, reprise et continuité pour les systèmes et données d’entreprise.",
              icon: "building",
            },
            {
              title: "Déploiements du Manitoba au Québec",
              text: "Installation physique et configuration sur place au besoin, suivies d’un soutien continu à distance.",
              icon: "globe",
            },
          ],
        },
      },
      networkInfrastructurePage: {
        seo: {
          title: "Services réseau et infrastructure pour entreprises",
          description:
            "Services réseau et infrastructure incluant pare-feu, commutateurs, Wi-Fi, serveurs, VPN, coordination du câblage et planification d'infrastructure.",
        },
        hero: {
          eyebrow: "Infrastructure réseau",
          title:
            "Services d’infrastructure réseau pour une connectivité d’affaires fiable",
          text: "Un soutien professionnel pour les pare-feu, commutateurs, Wi-Fi, VPN, câblage et connexions sécurisées de votre entreprise.",
          button: {
            label: "Contactez-nous",
            href: "/fr/contact-us/",
          },
          badges: {
            top: {
              value: "Réseaux",
              label: "Sécurisés",
            },
            bottom: {
              value: "Sur site",
              label: "Déploiement",
            },
          },
        },

        navItems: [
          { label: "Aperçu", href: "#overview" },
          { label: "Ce qui est inclus", href: "#included" },
          { label: "Notre approche", href: "#how-it-works" },
          { label: "Services connexes", href: "#related-services" },
          { label: "Zones desservies", href: "#service-areas" },
        ],

        support: {
          title: "Problème réseau?",
          text: "Nous sommes disponibles 24/7.",
          phone: "222-222-2222",
          phoneHref: "5192129788",
          note: "Soutien après les heures d’ouverture",
        },

        overview: {
          eyebrow: "Aperçu",
          title: "Un soutien réseau pour une connectivité stable et sécurisée",
          paragraphs: [
            "BusinessCompany Solutions Inc. aide les entreprises à concevoir, installer, gérer et soutenir l’infrastructure réseau qui relie les utilisateurs, appareils, serveurs, services cloud et différents sites.",
            "De la configuration des pare-feu et commutateurs au Wi-Fi, VPN, coordination du câblage et connectivité multisite, nous aidons à bâtir des réseaux fiables, sécurisés et plus faciles à gérer.",
          ],
          highlights: [
            {
              icon: "shield",
              title: "Bases réseau sécurisées",
              text: "Soutien pour les pare-feu, VPN, segmentation, contrôle des accès et bonnes pratiques de sécurité réseau.",
            },
            {
              icon: "clock",
              title: "Connectivité d’affaires fiable",
              text: "Une infrastructure réseau planifiée et soutenue pour réduire les interruptions, lenteurs et problèmes récurrents.",
            },
            {
              icon: "location",
              title: "Soutien sur site et à distance",
              text: "Basée à Cambridge, notre équipe soutient les déploiements réseau d’entreprises en Ontario et au-delà.",
            },
          ],
        },

        included: {
          eyebrow: "Ce qui est inclus",
          title:
            "Des services d’infrastructure réseau pour garder votre entreprise connectée",
          items: [
            "Configuration et soutien des pare-feu",
            "Planification et déploiement du Wi-Fi d’affaires",
            "Configuration des commutateurs et VLAN",
            "Soutien VPN et accès à distance",
            "Dépannage réseau",
            "Soutien à la connectivité multisite",
            "Documentation réseau",
            "Coordination du câblage",
            "Coordination avec les fournisseurs Internet",
            "Maintenance réseau continue",
          ],
        },

        process: {
          eyebrow: "Notre approche",
          title:
            "Un processus pratique pour bâtir et soutenir des réseaux fiables",
          steps: [
            {
              number: "01",
              title: "Évaluer",
              text: "Nous examinons votre réseau actuel, vos appareils, vos sites, vos services Internet, vos besoins de sécurité et vos exigences d’affaires.",
              icon: "search",
            },
            {
              number: "02",
              title: "Concevoir",
              text: "Nous planifions la bonne approche pour les pare-feu, commutateurs, Wi-Fi, VPN et connexions de votre environnement.",
              icon: "document",
            },
            {
              number: "03",
              title: "Déployer et soutenir",
              text: "Nous aidons à installer, configurer, documenter et soutenir l’infrastructure réseau dont votre entreprise dépend.",
              icon: "monitor",
            },
            {
              number: "04",
              title: "Améliorer",
              text: "Nous continuons à optimiser la performance, la fiabilité et la sécurité à mesure que votre entreprise et votre réseau évoluent.",
              icon: "growth",
            },
          ],
        },

        connectedServices: {
          eyebrow: "Services TI connexes",
          title: "Une infrastructure réseau connectée au reste de votre TI",
          text: "Votre réseau soutient presque tout ce que fait votre entreprise. Il est lié aux services TI gérés, à la cybersécurité, à Microsoft 365, aux sauvegardes, à l’accès à distance et à la planification technologique.",
          ariaLabel: "Services TI connexes",
          services: [
            {
              title: "Services TI gérés",
              href: "/fr/managed-it-services/",
            },
            {
              title: "Services de cybersécurité",
              href: "/fr/cybersecurity-services/",
            },
            {
              title: "Cloud et Microsoft 365",
              href: "/fr/cloud-microsoft-365/",
            },
            {
              title: "Sauvegarde et reprise après sinistre",
              href: "/fr/backup-disaster-recovery/",
            },
            {
              title: "TI cogérée et consultation",
              href: "/fr/co-managed-it-consulting/",
            },
          ],
        },

        areas: {
          eyebrow: "Zones desservies",
          title: "Soutien en infrastructure réseau partout en Ontario",
          text: "Basée à Cambridge, en Ontario, BusinessCompany soutient les entreprises de Cambridge, Kitchener, Waterloo, Guelph, du GTA et du reste de l’Ontario. Pour les déploiements plus importants, l’équipe peut se déplacer sur site du Manitoba au Québec, puis assurer le soutien continu à distance après l’installation.",
          items: [
            {
              title: "Cambridge, Kitchener, Waterloo et Guelph",
              text: "Un soutien local en infrastructure réseau par une équipe qui connaît bien la région.",
              icon: "pin",
            },
            {
              title: "GTA et entreprises partout en Ontario",
              text: "Soutien sur site et à distance pour les pare-feu, commutateurs, Wi-Fi, VPN et connectivité.",
              icon: "building",
            },
            {
              title: "Déploiements du Manitoba au Québec",
              text: "Installation physique et configuration sur place au besoin, suivies d’un soutien continu à distance.",
              icon: "globe",
            },
          ],
        },
      },
      coManagedItConsultingPage: {
        seo: {
          title: "TI cogérée et services de consultation informatique",
          description:
            "Services de TI cogérée et consultation pour les entreprises qui ont besoin de conseils seniors, soutien de projet, escalade et planification TI stratégique.",
        },
        hero: {
          eyebrow: "TI cogérée et consultation",
          title:
            "Services TI cogérés et consultation pour les entreprises en croissance",
          text: "Un soutien TI flexible et des services de consultation pour les entreprises qui ont besoin d’expertise supplémentaire, de soutien aux projets, de conseils stratégiques ou d’aide pour renforcer leur équipe TI interne.",
          button: {
            label: "Contactez-nous",
            href: "/fr/contact-us/",
          },
          badges: {
            top: {
              value: "Conseils",
              label: "Experts",
            },
            bottom: {
              value: "Équipe",
              label: "Renforcée",
            },
          },
        },

        navItems: [
          { label: "Aperçu", href: "#overview" },
          { label: "Ce qui est inclus", href: "#included" },
          { label: "Notre approche", href: "#how-it-works" },
          { label: "Services connexes", href: "#related-services" },
          { label: "Zones desservies", href: "#service-areas" },
        ],

        support: {
          title: "Besoin de conseils TI?",
          text: "Nous sommes disponibles 24/7.",
          phone: "222-222-2222",
          phoneHref: "5192129788",
          note: "Soutien après les heures d’ouverture",
        },

        overview: {
          eyebrow: "Aperçu",
          title:
            "Une expertise TI flexible lorsque votre entreprise a besoin de soutien supplémentaire",
          paragraphs: [
            "BusinessCompany Solutions Inc. offre des services TI cogérés et de consultation pour les entreprises qui disposent déjà de ressources TI internes, mais qui ont besoin d’un soutien additionnel, d’expertise senior ou d’aide pour des projets plus importants.",
            "Que votre équipe ait besoin de soutien d’escalade, de planification stratégique, de livraison de projets, de conseils d’infrastructure ou d’un appui au quotidien, nous travaillons aux côtés de votre équipe existante sans remplacer ce qui fonctionne déjà.",
          ],
          highlights: [
            {
              icon: "shield",
              title: "Soutien pour les équipes TI internes",
              text: "Capacité supplémentaire et conseils techniques senior lorsque votre équipe doit gérer plus de charge, de risques ou de complexité.",
            },
            {
              icon: "clock",
              title: "Soutien aux projets et aux escalades",
              text: "Aide pour les initiatives importantes, les décisions techniques, les enjeux urgents et la planification TI critique.",
            },
            {
              icon: "location",
              title: "Équipe locale. Portée élargie.",
              text: "Basée à Cambridge, notre équipe soutient des entreprises partout en Ontario et au-delà.",
            },
          ],
        },

        included: {
          eyebrow: "Ce qui est inclus",
          title:
            "Des services TI cogérés et de consultation pour renforcer votre équipe",
          items: [
            "Soutien aux équipes TI internes",
            "Consultation et stratégie TI",
            "Planification et livraison de projets",
            "Soutien d’escalade",
            "Conseils en infrastructure",
            "Consultation Microsoft 365 et cloud",
            "Recommandations en cybersécurité",
            "Coordination avec les fournisseurs",
            "Documentation et amélioration des processus",
            "Planification de la feuille de route technologique",
          ],
        },

        process: {
          eyebrow: "Notre approche",
          title:
            "Un processus pratique pour travailler aux côtés de votre équipe",
          steps: [
            {
              number: "01",
              title: "Comprendre",
              text: "Nous apprenons comment votre équipe fonctionne, où le soutien est nécessaire et quels objectifs d’affaires doivent être protégés.",
              icon: "search",
            },
            {
              number: "02",
              title: "Aligner",
              text: "Nous définissons les responsabilités, la communication, les priorités et le bon modèle de soutien pour votre entreprise.",
              icon: "document",
            },
            {
              number: "03",
              title: "Soutenir et conseiller",
              text: "Nous offrons du soutien technique, de la consultation, de l’aide d’escalade et des conseils de projet selon les besoins.",
              icon: "monitor",
            },
            {
              number: "04",
              title: "Améliorer",
              text: "Nous aidons à améliorer les systèmes, la documentation, la sécurité, la planification et l’orientation TI à long terme.",
              icon: "growth",
            },
          ],
        },

        connectedServices: {
          eyebrow: "Services TI connexes",
          title: "Une consultation connectée au reste de votre TI",
          text: "La TI cogérée et la consultation sont souvent liées aux services TI gérés, à la cybersécurité, à Microsoft 365, aux sauvegardes, à l’infrastructure réseau et à la planification technologique.",
          ariaLabel: "Services TI connexes",
          services: [
            {
              title: "Services TI gérés",
              href: "/fr/managed-it-services/",
            },
            {
              title: "Services de cybersécurité",
              href: "/fr/cybersecurity-services/",
            },
            {
              title: "Cloud et Microsoft 365",
              href: "/fr/cloud-microsoft-365/",
            },
            {
              title: "Sauvegarde et reprise après sinistre",
              href: "/fr/backup-disaster-recovery/",
            },
            {
              title: "Infrastructure réseau",
              href: "/fr/network-infrastructure/",
            },
          ],
        },

        areas: {
          eyebrow: "Zones desservies",
          title: "Soutien TI cogéré et consultation partout en Ontario",
          text: "Basée à Cambridge, en Ontario, BusinessCompany soutient les entreprises de Cambridge, Kitchener, Waterloo, Guelph, du GTA et du reste de l’Ontario. Pour les déploiements plus importants, l’équipe peut se déplacer sur site du Manitoba au Québec, puis assurer le soutien continu à distance après l’installation.",
          items: [
            {
              title: "Cambridge, Kitchener, Waterloo et Guelph",
              text: "Un soutien local en consultation TI et en services cogérés par une équipe qui connaît bien la région.",
              icon: "pin",
            },
            {
              title: "GTA et entreprises partout en Ontario",
              text: "Soutien aux équipes TI internes, projets, infrastructure, cloud, sécurité et planification.",
              icon: "building",
            },
            {
              title: "Déploiements du Manitoba au Québec",
              text: "Installation physique et configuration sur place au besoin, suivies d’un soutien continu à distance.",
              icon: "globe",
            },
          ],
        },
      },
    },

    securityCompliancePage: {
      seo: {
        title: "Services de sécurité TI et conformité pour entreprises",
        description:
          "Soutenez votre entreprise avec des services pratiques de sécurité TI et conformité, incluant sécurité Microsoft 365, surveillance, contrôles d'accès, réduction des risques et conseils sur les politiques.",
      },

      hero: {
        eyebrow: "Étude de cas",
        title:
          "Comment nous avons aidé North Bay Manufacturing à rester sécurisé et assuré",
        text: "North Bay Manufacturing devait renforcer sa posture de sécurité TI, répondre aux exigences d’assurance et maintenir ses opérations sans interruption inutile. BusinessCompany a livré un projet ciblé en sécurité et conformité, adapté aux besoins de l’entreprise.",
        meta: [
          {
            label: "Client",
            value: "North Bay Manufacturing",
          },
          {
            label: "Priorité",
            value: "Sécurité TI, conformité et exigences d’assurance",
          },
          {
            label: "Résultat",
            value:
              "Posture de sécurité améliorée avec une perturbation minimale",
          },
        ],
      },

      overview: {
        eyebrow: "Aperçu de l’étude de cas",
        title: "Étude de cas en sécurité TI et conformité",
        text: "North Bay Manufacturing est un fournisseur reconnu dans son secteur, opérant dans un environnement où la technologie fiable, les contrôles de sécurité et les exigences d’assurance sont essentiels à la continuité des activités.",
      },

      challenges: {
        eyebrow: "Défis rencontrés",
        title: "Les exigences de sécurité devenaient une priorité d’affaires",
        text: "Le client avait besoin d’améliorations de sécurité concrètes pouvant être mises en œuvre rapidement, sans ralentir les opérations quotidiennes.",
        items: [
          "Difficulté à répondre aux exigences de sécurité liées à l’assurance",
          "Risque de perturbation opérationnelle",
          "Besoin de solutions de sécurité évolutives",
          "Besoin d’une mise en œuvre rapide pour réduire les temps d’arrêt",
        ],
      },

      approach: {
        eyebrow: "Notre approche",
        title:
          "Un plan pratique axé sur la sécurité, la conformité et la disponibilité",
        text: "BusinessCompany s’est rendu à North Bay et a développé une stratégie claire visant à comprendre l’environnement existant, à aligner les contrôles de sécurité avec les attentes d’assurance et à mettre en œuvre les améliorations avec le moins de perturbations possible.",
        items: [
          {
            title: "Évaluation de sécurité",
            text: "Analyse de l’environnement TI existant afin d’évaluer les mesures de sécurité, les lacunes et les zones de risque.",
          },
          {
            title: "Stratégie de conformité",
            text: "Identification des exigences liées à l’assurance et alignement des contrôles recommandés avec les besoins opérationnels du client.",
          },
          {
            title: "Mise en œuvre",
            text: "Intégration contrôlée de mesures de sécurité améliorées afin de protéger les opérations tout en minimisant les interruptions.",
          },
        ],
      },

      results: {
        eyebrow: "Résultats obtenus",
        title:
          "Une sécurité renforcée et une meilleure préparation aux exigences d’assurance",
        text: "Le projet a permis à North Bay Manufacturing d’avancer avec plus de confiance dans sa posture de sécurité et sa planification de continuité.",
        items: [
          "Mesures de sécurité renforcées dépassant les exigences d’assurance",
          "Renouvellement d’assurance réussi à des tarifs concurrentiels",
          "Perturbation opérationnelle minimale pendant la mise en œuvre",
        ],
      },

      quote: {
        text: "BusinessCompany a non seulement répondu à nos besoins, mais a dépassé nos attentes, ce qui nous a permis de poursuivre nos opérations sans interruption.",
        author: "North Bay Manufacturing",
      },

      conclusion: {
        eyebrow: "Conclusion",
        title:
          "Des solutions TI adaptées aux entreprises axées sur la sécurité",
        text: "Cette étude de cas démontre l’engagement de BusinessCompany à fournir des solutions TI pratiques qui soutiennent la sécurité, la conformité et la continuité des activités. Pour les organisations confrontées à des exigences d’assurance ou à des attentes de sécurité accrues, le bon partenaire TI peut transformer le risque en plan d’action clair.",
      },

      cta: {
        eyebrow: "Planifiez votre analyse gratuite",
        title:
          "Besoin d’aide avec vos exigences de sécurité ou d’assurance TI?",
        text: "BusinessCompany peut analyser votre environnement, identifier les zones de risque et vous aider à établir un plan concret pour renforcer votre sécurité et votre conformité.",
        buttonLabel: "Planifier une consultation",
        buttonHref: "/fr/contact-us/",
      },
    },

    aboutPage: {
      seo: {
        title: "Partenaire TI de confiance à Cambridge, Ontario",
        description:
          "Découvrez BusinessCompany, un partenaire TI basé à Cambridge, Ontario, offrant TI gérée, cybersécurité, cloud et soutien d'infrastructure.",
      },

      hero: {
        eyebrow: "À propos de BusinessCompany",
        title:
          "Un soutien TI expérimenté, fondé sur la confiance, l’expérience et la responsabilité",
        text: "BusinessCompany aide les entreprises de l’Ontario à gérer, sécuriser et améliorer leur technologie grâce à un soutien TI pratique, à la cybersécurité et à des conseils à long terme.",
        primaryButton: "Parler à un expert TI",
        secondaryButton: "Explorer nos services",
      },

      team: {
        eyebrow: "Notre équipe",
        title: "Les personnes derrière votre soutien TI",
        text: "Notre équipe apprend à connaître votre entreprise, vos systèmes, vos fournisseurs et votre infrastructure au fil du temps. Cette familiarité permet des réponses plus rapides, de meilleures décisions et un soutien sur lequel vous pouvez compter.",
        topImageAlt:
          "L’équipe BusinessCompany travaillant ensemble dans un bureau moderne",
        imageAlt: "Membres de l’équipe BusinessCompany",
        items: [
          "<strong>25+ ans</strong> d’expérience en services TI",
          "Soutien à distance et sur site",
          "Utilisateurs, réseaux, cloud, sécurité et projets d’entreprise",
        ],
      },

      priorities: {
        eyebrow: "Comment nous recommandons les solutions",
        title: "Des priorités claires avant l’investissement",
        text: "Tout n’a pas besoin d’être réglé aujourd’hui. Nous déterminons ce qui compte le plus, ce qui peut être planifié et ce qui peut attendre, afin que vous investissiez avec confiance.",
        items: [
          {
            number: "01",
            title: "Corriger maintenant",
            text: "Traiter les problèmes qui touchent la sécurité, la fiabilité ou le travail quotidien.",
          },
          {
            number: "02",
            title: "Planifier ensuite",
            text: "Préparer les changements à venir pour qu’ils soient simples et prévisibles.",
          },
          {
            number: "03",
            title: "Remettre à plus tard",
            text: "Reporter les éléments qui ne représentent pas un risque immédiat et les revoir au bon moment.",
          },
        ],
      },

      support: {
        eyebrow: "Ce que nous soutenons",
        title:
          "Les éléments TI fonctionnent mieux lorsqu’ils sont gérés ensemble",
        items: [
          "Services TI gérés",
          "Cybersécurité",
          "Microsoft 365",
          "Sauvegarde et reprise",
          "Infrastructure réseau",
          "Serveurs et postes de travail",
          "Matériel et logiciels",
          "Coordination avec les fournisseurs",
          "Travaux de projet sur site",
        ],
      },

      updates: {
        eyebrow: "Quand un problème survient",
        title:
          "Des mises à jour claires lorsque les problèmes touchent l’entreprise",
        text: "Lorsqu’un problème survient, une communication claire aide votre équipe à rester informée et en contrôle.",
        items: [
          {
            title: "Ce qui s’est passé",
            text: "Un résumé simple et clair du problème.",
          },
          {
            title: "Ce qui est touché",
            text: "Les services, systèmes ou utilisateurs concernés.",
          },
          {
            title: "Ce que nous faisons",
            text: "Nos actions et les prochaines étapes pour résoudre le problème.",
          },
          {
            title: "Ce qui vient ensuite",
            text: "Le délai prévu et la façon dont nous assurerons le suivi.",
          },
        ],
      },

      areas: {
        eyebrow: "Où nous travaillons",
        title: "Soutien TI local en Ontario et au-delà",
        text: "BusinessCompany est basé à Cambridge, en Ontario, et soutient les entreprises de la région de Waterloo, de Guelph, du Grand Toronto et d’autres emplacements lorsque du travail sur site est nécessaire.",
        items: [
          {
            icon: "pin",
            title: "Cambridge, Ontario",
            text: "Notre point d’attache pour le soutien TI local, le service sur site et les projets technologiques d’entreprise.",
          },
          {
            icon: "building",
            title: "Région de Waterloo, Guelph et Grand Toronto",
            text: "Soutien pour les entreprises en croissance à Kitchener-Waterloo, Cambridge, Guelph et dans la région du Grand Toronto.",
          },
          {
            icon: "globe",
            title: "Soutien à distance et sur site élargi",
            text: "Soutien à distance partout où votre équipe travaille, avec du soutien sur site élargi pour les projets lorsque nécessaire.",
          },
        ],
      },
    },

    blogPage: {
      seo: {
        title: "Blogue TI pour conseils en technologie d'entreprise",
        description:
          "Lisez les conseils TI de BusinessCompany sur la TI gérée, la cybersécurité, Microsoft 365, le cloud, la sauvegarde et l'infrastructure.",
      },
      hero: {
        eyebrow: "BLOGUE BusinessCompany",
        title: "Des conseils TI pratiques pour les entreprises en croissance",
        text: "Des articles clairs sur les services TI gérés, la cybersécurité, Microsoft 365, les sauvegardes, les réseaux et les décisions technologiques d'entreprise.",
      },

      posts: {
        allPostsEyebrow: "TOUS LES ARTICLES",
        latestTitle: "Articles récents",
        postsFound: "Articles trouvés",
        readArticle: "Lire l'article",
        read: "Lire",
        fallbackCategory: "TI",
      },
    },

    contactUsPage: {
      seo: {
        title: "Contactez BusinessCompany pour du soutien informatique",
        description:
          "Contactez BusinessCompany pour services TI gérés, cybersécurité, soutien Microsoft 365, cloud, sauvegarde et soutien informatique aux entreprises en Ontario.",
      },
      hero: {
        eyebrow: "CONTACTER BusinessCompany",
        title: "Parlons de votre informatique d’entreprise",
        text: "Dites-nous ce qui est en place, ce qui ne fonctionne pas et ce qui doit être amélioré. Notre équipe examinera votre message et vous répondra.",
      },

      details: {
        regularHours: {
          label: "Heures régulières",
          time: "Lun–Ven, 8 h 00 – 17 h 00",
          phone: "111-111-1111",
          phoneHref: "tel:5192676767",
        },

        afterHours: {
          label: "Soutien après les heures",
          time: "Soutien urgent 24/7",
          phone: "222-222-2222",
          phoneHref: "tel:5192129788",
        },

        office: {
          label: "Bureau",
          addressLine1: "Company Address",
          addressLine2: "Cambridge, ON N3H 4R7",
          directions: "Obtenir l’itinéraire",
          mapHref: "https://maps.app.goo.gl/xvzKEFAM9J13dEYX8",
        },
      },
    },

    faqPage: {
      seo: {
        title: "FAQ BusinessCompany | Questions sur le soutien informatique",
        description:
          "Trouvez les réponses aux questions fréquentes sur les services TI gérés, cybersécurité, Microsoft 365, cloud, sauvegarde et soutien informatique de BusinessCompany.",
      },
      hero: {
        eyebrow: "FAQ",
        title: "Frequently asked questions",
        text: "Answers to common questions about BusinessCompany’s managed IT, cybersecurity, cloud, backup, and business IT support services.",
      },

      items: [
        {
          question: "What IT services do you offer for businesses?",
          answer:
            "BusinessCompany provides managed IT services, cybersecurity support, Microsoft 365 and cloud services, backup and disaster recovery, network infrastructure, hardware and software support, vendor coordination, and 24/7 urgent support.",
        },
        {
          question: "How can BusinessCompany help improve our data security?",
          answer:
            "BusinessCompany helps strengthen security across users, devices, email, Microsoft 365, firewalls, backups, and access controls. We can review your current environment, identify areas of risk, and recommend practical steps to reduce exposure.",
        },
        {
          question: "What sets BusinessCompany apart from other IT providers?",
          answer:
            "BusinessCompany supports the full business IT environment instead of only one piece of it. That means support, networks, cloud, backups, cybersecurity, vendors, and project work can be handled with better context and fewer handoffs.",
        },
        {
          question: "How quickly can you respond to IT issues?",
          answer:
            "Regular support is available during business hours, with 24/7 after-hours support for urgent issues. Response depends on the type and priority of the issue, but the goal is always to reduce downtime and keep the business moving.",
        },
        {
          question: "Can you help with IT compliance requirements?",
          answer:
            "Yes. BusinessCompany can help with practical security and compliance-related controls such as MFA, backups, access management, endpoint protection, firewall security, Microsoft 365 security settings, documentation, and risk reduction.",
        },
        {
          question: "What is the process for getting started with BusinessCompany?",
          answer:
            "The first step is a conversation about your current IT environment, what is working, what is causing problems, and what needs to improve. From there, BusinessCompany can review the environment and recommend the next steps.",
        },
      ],

      cta: {
        eyebrow: "CONTACT BusinessCompany",
        title: "Still have questions?",
        text: "Tell us what is in place, what is not working, and what needs to improve.",
        button: "Contact BusinessCompany",
      },
    },
  },
} as const;

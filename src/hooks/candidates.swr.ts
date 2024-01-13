import CandidateScores from "@/interfaces/CandidateScores";

export function useTopCandidates() {
  let fakeCandidateScores: CandidateScores[] = [
    {
      _id: "1",
      candidate: {
        _id: "101",
        firstName: "Alice",
        lastName: "Smith",
        position: "Frontend Developer",
        summary: "Passionate about creating delightful user experiences.",
        image: "https://picsum.photos/200?id=1",
        source: "resume",
      },
      opening: {
        _id: "1234",
        title: "Frontend Developer",
        companyDepartment: "Engineering",
        type: "Full-time",
        total: 3,
        requiredExperience: {
          min: 2,
          max: 4,
        },
        skills: [
          { _id: "1", name: "HTML", link: "https://example.com/html" },
          { _id: "2", name: "CSS", link: "https://example.com/css" },
          {
            _id: "3",
            name: "JavaScript",
            link: "https://example.com/javascript",
          },
        ],
        createdAt: "2023-12-15",
        stats: {
          success: 2,
          processing: 0,
          error: 1,
          total: 3,
        },
        selected: 1,
        status: "open",
      },
      positionScore: 78.5,
      skillScores: [
        { name: "HTML", score: 80, icon: "/path/to/html-icon.png" },
        { name: "CSS", score: 75, icon: "/path/to/css-icon.png" },
        { name: "JavaScript", score: 85, icon: "/path/to/js-icon.png" },
      ],
      summary:
        "Lorem ipsum dolor sit amet consectetur. Facilisis nisl eget sagittis duis sollicitudin integer pellentesque purus. Dignissim bibendum elit sagittis morbi aliquam vel tempus commodo scelerisque. Dui nulla urna risus integer. Laoreet ultrices congue sit gravida eu enim eget euismod ultricies.",
    },
    {
      _id: "2",
      candidate: {
        _id: "102",
        firstName: "Bob",
        lastName: "Johnson",
        position: "Backend Developer",
        summary:
          "Experienced in building scalable and efficient server-side applications.",
        image: "https://picsum.photos/200?id=2",
        source: "resume",
      },
      opening: {
        _id: "!234",
        title: "Backend Developer",
        companyDepartment: "Engineering",
        type: "Full-time",
        total: 2,
        requiredExperience: {
          min: 3,
          max: 6,
        },
        skills: [
          { _id: "4", name: "Node.js", link: "https://example.com/nodejs" },
          { _id: "5", name: "MongoDB", link: "https://example.com/mongodb" },
        ],
        createdAt: "2024-01-02",
        stats: {
          success: 1,
          processing: 1,
          error: 0,
          total: 2,
        },
        selected: 0,
        status: "open",
      },
      positionScore: 88.2,
      skillScores: [
        { name: "Node.js", score: 90, icon: "/path/to/nodejs-icon.png" },
        { name: "MongoDB", score: 86, icon: "/path/to/mongodb-icon.png" },
      ],
      summary:
        "Lorem ipsum dolor sit amet consectetur. Facilisis nisl eget sagittis duis sollicitudin integer pellentesque purus. Dignissim bibendum elit sagittis morbi aliquam vel tempus commodo scelerisque. Dui nulla urna risus integer. Laoreet ultrices congue sit gravida eu enim eget euismod ultricies.",
    },
    {
      _id: "3",
      candidate: {
        _id: "103",
        firstName: "Charlie",
        lastName: "Brown",
        position: "UI/UX Designer",
        summary:
          "Creative designer with a focus on user-centric design solutions.",
        source: "linkedin",
        // image: "https://picsum.photos/200?id=3",
      },
      opening: {
        _id: "2345",
        title: "UI/UX Designer",
        companyDepartment: "Design",
        type: "Contract",
        total: 1,
        requiredExperience: {
          min: 2,
          max: 5,
        },
        skills: [
          { _id: "6", name: "Figma", link: "https://example.com/figma" },
          { _id: "7", name: "Adobe XD", link: "https://example.com/adobe-xd" },
        ],
        createdAt: "2023-12-28",
        stats: {
          success: 0,
          processing: 1,
          error: 0,
          total: 1,
        },
        selected: 0,
        status: "open",
      },
      positionScore: 92.1,
      skillScores: [
        { name: "Figma", score: 12, icon: "/path/to/figma-icon.png" },
        { name: "Adobe XD", score: 90, icon: "/path/to/adobe-xd-icon.png" },
      ],
      summary:
        "Lorem ipsum dolor sit amet consectetur. Facilisis nisl eget sagittis duis sollicitudin integer pellentesque purus. Dignissim bibendum elit sagittis morbi aliquam vel tempus commodo scelerisque. Dui nulla urna risus integer. Laoreet ultrices congue sit gravida eu enim eget euismod ultricies.",
    },
  ];

  fakeCandidateScores = fakeCandidateScores.map((candidate) => {
    const updatedSkillScores = candidate.skillScores.map((skill) => ({
      ...skill,
      icon: `https://picsum.photos/100?id=${Math.floor(Math.random() * 1000)}`,
    }));

    return {
      ...candidate,
      skillScores: updatedSkillScores,
    };
  });

  return {
    candidates: fakeCandidateScores,
    isLoadingCandidates: false,
    errorLoadingCandidates: false,
  };
}

export function useOpeningCandidates(openingId: string) {
  let fakeCandidateScores: CandidateScores[] = [
    {
      _id: "1",
      candidate: {
        _id: "101",
        firstName: "Alice",
        lastName: "Smith",
        position: "Frontend Developer",
        summary: "Passionate about creating delightful user experiences.",
        image: "https://picsum.photos/200?id=1",
        source: "resume",
      },
      opening: {
        _id: "1234",
        title: "Frontend Developer",
        companyDepartment: "Engineering",
        type: "Full-time",
        total: 3,
        requiredExperience: {
          min: 2,
          max: 4,
        },
        skills: [
          { _id: "1", name: "HTML", link: "https://example.com/html" },
          { _id: "2", name: "CSS", link: "https://example.com/css" },
          {
            _id: "3",
            name: "JavaScript",
            link: "https://example.com/javascript",
          },
        ],
        createdAt: "2023-12-15",
        stats: {
          success: 2,
          processing: 0,
          error: 1,
          total: 3,
        },
        selected: 1,
        status: "open",
      },
      positionScore: 78.5,
      skillScores: [
        { name: "HTML", score: 80, icon: "/path/to/html-icon.png" },
        { name: "CSS", score: 75, icon: "/path/to/css-icon.png" },
        { name: "JavaScript", score: 85, icon: "/path/to/js-icon.png" },
      ],
      summary:
        "Lorem ipsum dolor sit amet consectetur. Facilisis nisl eget sagittis duis sollicitudin integer pellentesque purus. Dignissim bibendum elit sagittis morbi aliquam vel tempus commodo scelerisque. Dui nulla urna risus integer. Laoreet ultrices congue sit gravida eu enim eget euismod ultricies.",
    },
    {
      _id: "2",
      candidate: {
        _id: "102",
        firstName: "Bob",
        lastName: "Johnson",
        position: "Backend Developer",
        summary:
          "Experienced in building scalable and efficient server-side applications.",
        image: "https://picsum.photos/200?id=2",
        source: "resume",
      },
      opening: {
        _id: "!234",
        title: "Backend Developer",
        companyDepartment: "Engineering",
        type: "Full-time",
        total: 2,
        requiredExperience: {
          min: 3,
          max: 6,
        },
        skills: [
          { _id: "4", name: "Node.js", link: "https://example.com/nodejs" },
          { _id: "5", name: "MongoDB", link: "https://example.com/mongodb" },
        ],
        createdAt: "2024-01-02",
        stats: {
          success: 1,
          processing: 1,
          error: 0,
          total: 2,
        },
        selected: 0,
        status: "open",
      },
      positionScore: 88.2,
      skillScores: [
        { name: "Node.js", score: 90, icon: "/path/to/nodejs-icon.png" },
        { name: "MongoDB", score: 86, icon: "/path/to/mongodb-icon.png" },
      ],
      summary:
        "Lorem ipsum dolor sit amet consectetur. Facilisis nisl eget sagittis duis sollicitudin integer pellentesque purus. Dignissim bibendum elit sagittis morbi aliquam vel tempus commodo scelerisque. Dui nulla urna risus integer. Laoreet ultrices congue sit gravida eu enim eget euismod ultricies.",
    },
    {
      _id: "3",
      candidate: {
        _id: "103",
        firstName: "Charlie",
        lastName: "Brown",
        position: "UI/UX Designer",
        summary:
          "Creative designer with a focus on user-centric design solutions.",
        source: "linkedin",
        // image: "https://picsum.photos/200?id=3",
      },
      opening: {
        _id: "2345",
        title: "UI/UX Designer",
        companyDepartment: "Design",
        type: "Contract",
        total: 1,
        requiredExperience: {
          min: 2,
          max: 5,
        },
        skills: [
          { _id: "6", name: "Figma", link: "https://example.com/figma" },
          { _id: "7", name: "Adobe XD", link: "https://example.com/adobe-xd" },
        ],
        createdAt: "2023-12-28",
        stats: {
          success: 0,
          processing: 1,
          error: 0,
          total: 1,
        },
        selected: 0,
        status: "open",
      },
      positionScore: 92.1,
      skillScores: [
        { name: "Figma", score: 12, icon: "/path/to/figma-icon.png" },
        { name: "Adobe XD", score: 90, icon: "/path/to/adobe-xd-icon.png" },
      ],
      summary:
        "Lorem ipsum dolor sit amet consectetur. Facilisis nisl eget sagittis duis sollicitudin integer pellentesque purus. Dignissim bibendum elit sagittis morbi aliquam vel tempus commodo scelerisque. Dui nulla urna risus integer. Laoreet ultrices congue sit gravida eu enim eget euismod ultricies.",
    },
  ];

  fakeCandidateScores = fakeCandidateScores.map((candidate) => {
    const updatedSkillScores = candidate.skillScores.map((skill) => ({
      ...skill,
      icon: `https://picsum.photos/100?id=${Math.floor(Math.random() * 1000)}`,
    }));

    return {
      ...candidate,
      skillScores: updatedSkillScores,
    };
  });

  return {
    candidates: fakeCandidateScores,
    isLoadingCandidates: false,
    errorLoadingCandidates: false,
  };
}

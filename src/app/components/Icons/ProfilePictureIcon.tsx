import React from 'react';

function ProfilePictureIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 100 100"
      {...props}
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="0.5"
          x2="0.5"
          y2="1"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stop-color="var(--gradient-primary-from)" />
          <stop offset="1" stop-color="var(--gradient-primary-to)" />
        </linearGradient>
      </defs>
      <path
        d="M50,0A50,50,0,1,1,0,50,50,50,0,0,1,50,0Z"
        fill="var(--color-secondary)"
      />
      <path
        d="M44.848,39.578l-8.816-4.407a2.427,2.427,0,0,1-1.348-2.182v-3.12c.211-.258.434-.553.664-.878a21.119,21.119,0,0,0,2.726-5.351A3.662,3.662,0,0,0,40.221,20.3V16.611a3.68,3.68,0,0,0-.923-2.422V9.28a8.273,8.273,0,0,0-1.931-6.021C35.472,1.1,32.4,0,28.225,0s-7.248,1.1-9.143,3.258A8.274,8.274,0,0,0,17.151,9.28v4.908a3.68,3.68,0,0,0-.923,2.422V20.3a3.67,3.67,0,0,0,1.381,2.869,19.367,19.367,0,0,0,3.233,6.678V32.9a2.438,2.438,0,0,1-1.271,2.141l-8.232,4.49A8.322,8.322,0,0,0,7,46.844v2.988c0,4.38,13.884,5.537,21.225,5.537s21.225-1.157,21.225-5.537V47.024A8.28,8.28,0,0,0,44.848,39.578Z"
        transform="translate(21.275 22.316)"
        fill="url(#linear-gradient)"
      />
    </svg>
  );
}

export default ProfilePictureIcon;

import React from 'react';
// PropTypes를 import하여 컴포넌트로 전달되는 데이터 타입을 명시합니다.
import PropTypes from 'prop-types';

/**
 * 재사용 가능한 프로젝트 카드 컴포넌트
 * @param {object} props - 컴포넌트 props
 * @param {string} props.projectInitial - 카드 상단에 표시될 이니셜 (예: "Project B")
 * @param {string} props.bgColorClass - 상단 배경 Tailwind 색상 클래스 (예: "bg-rose-200")
 * @param {string} props.title - 프로젝트 제목
 * @param {string} props.description - 프로젝트 설명
 * @param {string[]} props.tags - 태그 배열
 */
const ProjectCard = ({ projectInitial, bgColorClass, title, description, tags }) => {
    return (
        // 카드 컨테이너
        <div className="max-w-sm w-full bg-white rounded-lg shadow-lg overflow-hidden">
            
            {/* 상단 이미지/배경 영역 */}
            {/* props로 받은 배경색 클래스를 적용합니다. */}
            <div className={`h-48 flex items-center justify-center ${bgColorClass}`}>
                {/* props로 받은 이니셜을 표시합니다. */}
                <h1 className="text-white text-6xl font-bold">{projectInitial}</h1>
            </div>
            
            {/* 하단 콘텐츠 영역 */}
            <div className="p-6">
                
                {/* 프로젝트 제목 */}
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                    {title}
                </h2>
                
                {/* 프로젝트 설명 */}
                <p className="text-gray-700 text-base mb-4">
                    {description}
                </p>
                
                {/* 태그 영역 */}
                {/* props로 받은 tags 배열을 map() 함수로 순회하며
                  각 태그를 <span>으로 렌더링합니다.
                */}
                <div className="flex flex-nowrap gap-2">
                    {tags.map((tag) => (
                        <span 
                            key={tag} // React가 각 항목을 식별하기 위한 key
                            className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 whitespace-nowrap"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                
            </div>
            
        </div>
    );
};

// 컴포넌트가 받을 props의 타입과 필수 여부를 정의합니다.
ProjectCard.propTypes = {
    projectInitial: PropTypes.string.isRequired,
    bgColorClass: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

// 이 파일의 기본 내보내기를 ProjectCard 컴포넌트로 설정합니다.
export default ProjectCard;
import React from 'react';
import { Tooltip } from 'react-tooltip';
interface HelpTextPropsType {
	helpText: string;
	className?: string;
}
export const HelpText = React.memo(function HelpText(props: HelpTextPropsType) {
	const { helpText, className } = props;
	const id = Math.random().toString(36).substr(2, 9);
	return (
		<span className={className}>
			<div
				data-for={id ?? 'my-tooltip'}
				data-tooltip-id={id ?? `my-tooltip`}
				data-tooltip-place="bottom"
				data-tooltip-offset={20}
			>
				<span className=" hover:cursor-pointer">
					<svg
						width="24"
						height="24"
						viewBox="0 0 22 22"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="w-[22px] h-[22px] hover:cursor-pointer"
					>
						<g clip-path="url(#clip0_442_4968)">
							<path
								d="M9.99984 1.66675C8.35166 1.66675 6.7405 2.15549 5.37009 3.07117C3.99968 3.98685 2.93157 5.28833 2.30084 6.81105C1.67011 8.33377 1.50509 10.0093 1.82663 11.6258C2.14817 13.2423 2.94185 14.7272 4.10728 15.8926C5.27272 17.0581 6.75758 17.8517 8.37408 18.1733C9.99059 18.4948 11.6661 18.3298 13.1889 17.6991C14.7116 17.0683 16.0131 16.0002 16.9287 14.6298C17.8444 13.2594 18.3332 11.6483 18.3332 10.0001C18.3332 7.78994 17.4552 5.67033 15.8924 4.10752C14.3296 2.54472 12.21 1.66675 9.99984 1.66675Z"
								stroke="#A41B1E"
								stroke-width="2"
								stroke-miterlimit="10"
							></path>
							<path
								d="M7.8125 7.902C7.8125 7.902 7.84531 7.21841 8.57695 6.62974C9.01094 6.28013 9.53125 6.17896 10 6.17193C10.427 6.16646 10.8082 6.23716 11.0363 6.34576C11.427 6.53169 12.1875 6.9856 12.1875 7.95083C12.1875 8.96646 11.5234 9.42779 10.7668 9.93521C10.0102 10.4426 9.80469 10.9934 9.80469 11.5626"
								stroke="#A41B1E"
								stroke-width="2"
								stroke-miterlimit="10"
								stroke-linecap="round"
							></path>
							<path
								d="M10.5234 13.5935C10.5234 14.012 10.1842 14.3513 9.76562 14.3513C9.3471 14.3513 9.00781 14.012 9.00781 13.5935C9.00781 13.175 9.3471 12.8357 9.76562 12.8357C10.1842 12.8357 10.5234 13.175 10.5234 13.5935Z"
								fill="#A41B1E"
								stroke="#A41B1E"
								stroke-width="0.046875"
							></path>
						</g>
						<defs>
							<clipPath id="clip0_442_4968">
								<rect
									width="20"
									height="20"
									fill="white"
								></rect>
							</clipPath>
						</defs>
					</svg>
				</span>
			</div>
			<Tooltip
				id={id ?? 'my-tooltip'}
				className={`max-w-[325px] p-4 z-50`}
			>
				{helpText}
			</Tooltip>
		</span>
	);
});

export default HelpText;

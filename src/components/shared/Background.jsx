import React from 'react';

const Background = () => {
    return (
        <div>
            <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary-container/20 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-tertiary-container/10 rounded-full blur-[100px]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-30 pointer-events-none">
                    <img
                        className="w-full h-full object-cover"
                        alt="abstract flowing organic shapes"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOibjMHEXVH8lF-_cwX2r-6DAGFFRdzqIBwwYajnZFa9JN9RjMBKjz7rXbA2ESrD6jpHaOtTpxUefBvgm0QE9tMi68E0_5_nZz-G1bDnAOxTdmAx_NQhf0wP0x20-n_jwm7U6_ttyhn3ZO8aG0Mvjxzq5IwEuTLjttkfxdCLNQmjPBHMgVQK45gbv-c1twcnOldmZRzgjteMV291QTFgF_0YntENo2wwL4Y_DZDBAnn78QJ9C1F-RMrti-q2UnXpfbZ7ceTmxAKiP_"
                    />
                </div>
        </div>
    );
};

export default Background;
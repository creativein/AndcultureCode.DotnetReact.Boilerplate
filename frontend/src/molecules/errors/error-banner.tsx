import React from "react";
import { Icons } from "atoms/constants/icons";
import Icon from "atoms/icons/icon";

// -----------------------------------------------------------------------------------------
// #region Interfaces
// -----------------------------------------------------------------------------------------

interface ErrorBannerProps {
    text: string;
}

// #endregion Interfaces

// -----------------------------------------------------------------------------------------
// #region Constants
// -----------------------------------------------------------------------------------------

const BASE_CLASS = "c-error-banner";

// #endregion Constants

// -----------------------------------------------------------------------------------------
// #region Component
// -----------------------------------------------------------------------------------------

const ErrorBanner: React.FC<ErrorBannerProps> = (props: ErrorBannerProps) => {
    return (
        <div className={BASE_CLASS}>
            <Icon type={Icons.Information} />
            {props.text}
        </div>
    );
};

// #endregion Component

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

export default ErrorBanner;

// #endregion Exports

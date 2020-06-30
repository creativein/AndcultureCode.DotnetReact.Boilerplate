import Button, { ButtonTypes } from "atoms/buttons/button";
import { ButtonStyles } from "atoms/constants/button-styles";
import { IconSizes } from "atoms/constants/icon-sizes";
import { Icons } from "atoms/constants/icons";
import Icon from "atoms/icons/icon";
import ProgressBar from "atoms/progress/progress-bar";
import Paragraph from "atoms/typography/paragraph";
import React from "react";
import StringUtils from "utilities/string-utils";

// -------------------------------------------------------------------------------------------------
// #region Interfaces
// -------------------------------------------------------------------------------------------------

interface FileUploadProgressBarProps {
    cssClassName?: string;
    isErrored?: boolean;
    onRetryClick?: () => void;
    value: number;
}

// #endregion Interfaces

// -------------------------------------------------------------------------------------------------
// #region Component
// -------------------------------------------------------------------------------------------------

const FileUploadProgressBar: React.FC<FileUploadProgressBarProps> = (
    props: FileUploadProgressBarProps
) => {
    const CSS_CLASS_NAME = "c-file-upload-progress-bar";

    // value must be an integer 0 < value < 100
    let value = Math.round(props.value);

    if (value < 0) {
        value = 0;
    }

    if (value > 100) {
        value = 100;
    }

    const classNames = [CSS_CLASS_NAME];

    if (props.isErrored) {
        classNames.push("-error");
    }

    if (!props.isErrored && value >= 100) {
        classNames.push("-success");
    }

    if (StringUtils.hasValue(props.cssClassName)) {
        classNames.push(props.cssClassName!);
    }

    return (
        <div className={classNames.join(" ")}>
            <div className={`${CSS_CLASS_NAME}__top`}>
                <div className={`${CSS_CLASS_NAME}__top__status`}>
                    {// if
                    value < 100 && !props.isErrored && (
                        <div className={`${CSS_CLASS_NAME}__top__status__text`}>
                            <Paragraph>Uploading...</Paragraph>
                        </div>
                    )}
                    {// if
                    value >= 100 && !props.isErrored && (
                        <div className={`${CSS_CLASS_NAME}__top__status__text`}>
                            <Icon
                                type={Icons.Checkmark}
                                size={IconSizes.Large}
                            />
                            <Paragraph>File Uploaded!</Paragraph>
                        </div>
                    )}
                    {// if
                    props.isErrored && (
                        <div
                            className={`${CSS_CLASS_NAME}__top__status__text -error`}>
                            <Paragraph>Upload Failed</Paragraph>
                            <Button
                                onClick={() => props.onRetryClick?.()}
                                style={ButtonStyles.Anchor}
                                type={ButtonTypes.Button}>
                                Try Again
                            </Button>
                        </div>
                    )}
                    {// if
                    !props.isErrored && (
                        <Paragraph
                            cssClassName={`${CSS_CLASS_NAME}__top__status__percent`}>
                            {value}%
                        </Paragraph>
                    )}
                </div>
            </div>
            <div className={`${CSS_CLASS_NAME}__bar`}>
                <ProgressBar value={value} isErrored={props.isErrored} />
            </div>
        </div>
    );
};

// #endregion Component

// -------------------------------------------------------------------------------------------------
// #region Exports
// -------------------------------------------------------------------------------------------------

export default FileUploadProgressBar;

// #endregion Exports

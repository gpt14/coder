import CheckCircleOutlined from "@mui/icons-material/CheckCircleOutlined";
import { css, useTheme } from "@emotion/react";
import type { HTMLAttributes, PropsWithChildren, FC } from "react";
import { MONOSPACE_FONT_FAMILY } from "theme/constants";
import { DisabledBadge, EnabledBadge } from "./Badges";

export const OptionName: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <span
      css={{
        display: "block",
      }}
    >
      {children}
    </span>
  );
};

export const OptionDescription: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <span
      css={{
        display: "block",
        color: theme.palette.text.secondary,
        fontSize: 14,
        marginTop: 4,
      }}
    >
      {children}
    </span>
  );
};

interface OptionValueProps {
  children?: boolean | number | string | string[] | Record<string, boolean>;
}

export const OptionValue: FC<OptionValueProps> = (props) => {
  const { children: value } = props;
  const theme = useTheme();

  const optionStyles = css`
    font-size: 14px;
    font-family: ${MONOSPACE_FONT_FAMILY};
    overflow-wrap: anywhere;
    user-select: all;

    & ul {
      padding: 16px;
    }
  `;

  if (typeof value === "boolean") {
    return value ? <EnabledBadge /> : <DisabledBadge />;
  }

  if (typeof value === "number") {
    return <span css={optionStyles}>{value}</span>;
  }

  if (!value || value.length === 0) {
    return <span css={optionStyles}>Not set</span>;
  }

  if (typeof value === "string") {
    return <span css={optionStyles}>{value}</span>;
  }

  if (typeof value === "object" && !Array.isArray(value)) {
    return (
      <ul css={{ listStyle: "none" }}>
        {Object.entries(value)
          .sort((a, b) => a[0].localeCompare(b[0]))
          .map(([option, isEnabled]) => (
            <li
              key={option}
              css={[
                optionStyles,
                !isEnabled && {
                  marginLeft: 32,
                  color: theme.palette.text.disabled,
                },
              ]}
            >
              <div
                css={{
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                {isEnabled && (
                  <CheckCircleOutlined
                    css={(theme) => ({
                      width: 16,
                      height: 16,
                      color: theme.palette.success.light,
                      margin: "0 8px",
                    })}
                  />
                )}
                {option}
              </div>
            </li>
          ))}
      </ul>
    );
  }

  if (Array.isArray(value)) {
    return (
      <ul css={{ listStylePosition: "inside" }}>
        {value.map((item) => (
          <li key={item} css={optionStyles}>
            {item}
          </li>
        ))}
      </ul>
    );
  }

  return <span css={optionStyles}>{JSON.stringify(value)}</span>;
};

interface OptionConfigProps extends HTMLAttributes<HTMLDivElement> {
  source?: boolean;
}

// OptionConfig takes a source bool to indicate if the Option is the source of the configured value.
export const OptionConfig = (props: OptionConfigProps) => {
  const { children, source, ...attrs } = props;
  const theme = useTheme();
  const borderColor = source
    ? theme.palette.primary.main
    : theme.palette.divider;

  return (
    <div
      {...attrs}
      css={{
        fontSize: 13,
        fontFamily: MONOSPACE_FONT_FAMILY,
        fontWeight: 600,
        backgroundColor: source
          ? theme.palette.primary.dark
          : theme.palette.background.paperLight,
        display: "inline-flex",
        alignItems: "center",
        borderRadius: 0.25,
        padding: "0 8px",
        border: `1px solid ${borderColor}`,
      }}
    >
      {children}
    </div>
  );
};

interface OptionConfigFlagProps extends HTMLAttributes<HTMLDivElement> {
  source?: boolean;
}

export const OptionConfigFlag = (props: OptionConfigFlagProps) => {
  const { children, source, ...attrs } = props;
  const theme = useTheme();

  return (
    <div
      {...attrs}
      css={{
        fontSize: 10,
        fontWeight: 600,
        margin: "0 6px 0 -4px",
        display: "block",
        backgroundColor: source ? "rgba(0, 0, 0, 0.7)" : theme.palette.divider,
        lineHeight: 1,
        padding: "2px 4px",
        borderRadius: 0.25,
      }}
    >
      {children}
    </div>
  );
};

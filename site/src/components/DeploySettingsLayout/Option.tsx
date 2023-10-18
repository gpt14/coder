import type { PropsWithChildren, FC } from "react";
import Box, { BoxProps } from "@mui/material/Box";
import { useTheme } from "@mui/system";
import { css } from "@emotion/react";
import { DisabledBadge, EnabledBadge } from "components/Badges/Badges";
import { MONOSPACE_FONT_FAMILY } from "theme/constants";
import CheckCircleOutlined from "@mui/icons-material/CheckCircleOutlined";

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
        marginTop: theme.spacing(0.5),
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
      padding: ${theme.spacing(2)};
    }
  `;

  const listStyles = css`
    margin: 0,
    padding: 0,
    display: "flex",
    flex-direction: "column",
    gap: theme.spacing(0.5),
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
      <ul css={listStyles && { listStyle: "none" }}>
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
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                {isEnabled && (
                  <CheckCircleOutlined
                    sx={{
                      width: 16,
                      height: 16,
                      color: (theme) => theme.palette.success.light,
                      margin: (theme) => theme.spacing(0, 1),
                    }}
                  />
                )}
                {option}
              </Box>
            </li>
          ))}
      </ul>
    );
  }

  if (Array.isArray(value)) {
    return (
      <ul css={listStyles && { listStylePosition: "inside" }}>
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

interface OptionConfigProps extends BoxProps {
  /**
   * Indicates if this configuration method is the source of the configured value
   */
  source?: boolean;
}

export const OptionConfig = (props: OptionConfigProps) => {
  const { source, sx, ...attrs } = props;
  const theme = useTheme();
  const borderColor = source ? theme.palette.info.main : theme.palette.divider;

  return (
    <Box
      {...attrs}
      sx={{
        fontSize: 13,
        fontFamily: MONOSPACE_FONT_FAMILY,
        fontWeight: 600,
        backgroundColor: (theme) =>
          source ? theme.palette.info.dark : "transparent",
        display: "inline-flex",
        alignItems: "center",
        borderRadius: 0.25,
        padding: (theme) => theme.spacing(0, 1),
        border: `1px solid ${borderColor}`,
        ...sx,
      }}
    />
  );
};

interface OptionConfigFlagProps extends BoxProps {
  source?: boolean;
}

export const OptionConfigFlag = (props: OptionConfigFlagProps) => {
  const { children, source, sx, ...attrs } = props;

  return (
    <Box
      {...attrs}
      sx={{
        fontSize: 10,
        fontWeight: 600,
        margin: (theme) => theme.spacing(0, 0.75, 0, -0.5),
        display: "block",
        backgroundColor: (theme) =>
          source ? "rgba(0, 0, 0, 0.7)" : theme.palette.divider,
        lineHeight: 1,
        padding: (theme) => theme.spacing(0.25, 0.5),
        borderRadius: 0.25,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

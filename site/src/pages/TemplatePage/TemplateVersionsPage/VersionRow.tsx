import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import TableCell from "@mui/material/TableCell";
import { TemplateVersion } from "api/typesGenerated";
import { Pill } from "components/Pill/Pill";
import { Stack } from "components/Stack/Stack";
import { TimelineEntry } from "components/Timeline/TimelineEntry";
import { UserAvatar } from "components/UserAvatar/UserAvatar";
import { InfoTooltip } from "components/InfoTooltip/InfoTooltip";
import { useClickableTableRow } from "hooks/useClickableTableRow";
import { useNavigate } from "react-router-dom";
import { colors } from "theme/colors";
import { combineClasses } from "utils/combineClasses";

export interface VersionRowProps {
  version: TemplateVersion;
  isActive: boolean;
  isLatest: boolean;
  onPromoteClick?: (templateVersionId: string) => void;
  onArchiveClick?: (templateVersionId: string) => void;
}

export const VersionRow: React.FC<VersionRowProps> = ({
  version,
  isActive,
  isLatest,
  onPromoteClick,
  onArchiveClick,
}) => {
  const styles = useStyles();
  const navigate = useNavigate();

  const clickableProps = useClickableTableRow({
    onClick: () => navigate(version.name),
  });

  const jobStatus = version.job.status;

  return (
    <TimelineEntry
      data-testid={`version-${version.id}`}
      {...clickableProps}
      className={combineClasses({
        [clickableProps.className]: true,
        [styles.row]: true,
      })}
    >
      <TableCell className={styles.versionCell}>
        <Stack
          direction="row"
          alignItems="center"
          className={styles.versionWrapper}
          justifyContent="space-between"
        >
          <Stack direction="row" alignItems="center">
            <UserAvatar
              username={version.created_by.username}
              avatarURL={version.created_by.avatar_url}
            />
            <Stack
              className={styles.versionSummary}
              direction="row"
              alignItems="center"
              spacing={1}
            >
              <span>
                <strong>{version.created_by.username}</strong> created the
                version <strong>{version.name}</strong>
              </span>

              {version.message && (
                <InfoTooltip title="Message" message={version.message} />
              )}

              <span className={styles.versionTime}>
                {new Date(version.created_at).toLocaleTimeString()}
              </span>
            </Stack>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={2}>
            {isActive && <Pill text="Active" type="success" />}
            {isLatest && <Pill text="Newest" type="info" />}
            {jobStatus === "pending" && (
              <Pill text={<>Pending&hellip;</>} type="warning" lightBorder />
            )}
            {jobStatus === "running" && (
              <Pill text={<>Building&hellip;</>} type="warning" lightBorder />
            )}
            {(jobStatus === "canceling" || jobStatus === "canceled") && (
              <Pill text="Canceled" type="neutral" lightBorder />
            )}
            {jobStatus === "failed" && <Pill text="Failed" type="error" />}
            {jobStatus === "failed" ? (
              <Button
                className={styles.promoteButton}
                disabled={isActive || version.archived}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  if (onArchiveClick) {
                    onArchiveClick(version.id);
                  }
                }}
              >
                Archive&hellip;
              </Button>
            ) : (
              <Button
                className={styles.promoteButton}
                disabled={isActive || jobStatus !== "succeeded"}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  if (onPromoteClick) {
                    onPromoteClick(version.id);
                  }
                }}
              >
                Promote&hellip;
              </Button>
            )}
          </Stack>
        </Stack>
      </TableCell>
    </TimelineEntry>
  );
};

const useStyles = makeStyles((theme) => ({
  row: {
    "&:hover $promoteButton": {
      color: theme.palette.text.primary,
      borderColor: colors.gray[11],
      "&:hover": {
        borderColor: theme.palette.text.primary,
      },
    },
  },

  promoteButton: {
    color: theme.palette.text.secondary,
    transition: "none",
  },

  versionWrapper: {
    padding: theme.spacing(2, 4),
  },

  versionCell: {
    padding: "0 !important",
    position: "relative",
    borderBottom: 0,
  },

  versionSummary: {
    ...theme.typography.body1,
    fontFamily: "inherit",
  },

  versionTime: {
    color: theme.palette.text.secondary,
    fontSize: 12,
  },
}));
